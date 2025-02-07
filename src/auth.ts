import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { InActiveAccountError, InvalidEmailPasswordError } from "./utils/errors"
import { User } from "./models/next-auth"
import { sendLogin } from "./services/auth.services"
import { getIsTokenValid } from "./utils/helper"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                username: {},
                password: {},
            },
            authorize: async (credentials) => {
                // call backend

                const res = await sendLogin(credentials);

                //Thành công
                if (+res.statusCode === 201) {
                    // return user object with their profile data
                    return {
                        _id: res?.data?.user?._id,
                        name: res?.data?.user?.name,
                        email: res?.data?.user?.email,
                        access_token: res?.data?.access_token,
                    }
                } else if (+res.statusCode == 401) {
                    //Sai mật khẩu
                    throw new InvalidEmailPasswordError()
                } else if (+res.statusCode == 400) {
                    //Tài khoản chưa kích hoạt
                    throw new InActiveAccountError()
                } else {
                    throw new Error("Internal server error")
                }
            },
        }),
    ],
    session: {
        strategy: 'jwt',
        maxAge: 24 * 60 * 60 // 1 day
    },
    pages: {
        signIn: "/login",
    },
    callbacks: {
        jwt({ token, user }) {
            if (user) { // User is available during sign-in
                token.user = (user as User);
            }
            return token
        },
        session({ session, token }) {
            (session.user as User) = token.user
            return session
        },
        authorized: async ({ auth }) => {
            // Logged in users are authenticated, otherwise redirect to login page
            
            //get token
            const token = auth?.user.access_token

            if(token){
                const isTokenValid = getIsTokenValid(token);
    
                if (!isTokenValid) {
                    return false;
                }
            }
            return !!auth
        },
    },
})