import { sendRequest } from "./api"

export const sendLogin = async (values: any) => {
    const res = await sendRequest<IBackendRes<ILogin>>({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/auth/login`,
        body: {
            ...values
        }
    })

    return res
}

export const sendRegister = async (values: RegisterInput) => {
    const res = await sendRequest<IBackendRes<any>>({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/auth/register`,
        body: {
            ...values
        }
    })

    return res
}

export const retryPassword = async (email: string) => {
    const res = await sendRequest<IBackendRes<any>>({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/auth/retry-password`,
        body: {
            email
        }
    })

    return res
}

export const changePassword = async (body: ChangePasswordInput) => {
    const { email, password, confirmPassword, code} = body;
    const res = await sendRequest<IBackendRes<any>>({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/auth/change-password`,
        body: {
            code, password, confirmPassword, email
        }
    })

    return res
}
