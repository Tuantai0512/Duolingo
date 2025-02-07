import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt"

interface User {
    _id: string;
    name: string;
    email: string;
    isVerify: boolean,
    type: string;
    role: string;
    access_token: string
}
declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        access_token: string;
        refresh_token: string;
        user: User;
        access_expire: number;
        error: string;
    }
}

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: User,
        access_token: string;
        refresh_token: string;
        access_expire: number;
        error: string;
    }


}

interface IChangePasswordProgress {
    setProgress: React.Dispatch<React.SetStateAction<number>>
    userEmail: string;
    setUserEmail: React.Dispatch<React.SetStateAction<string>>
}