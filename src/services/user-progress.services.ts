import { sendRequest } from "./api"

const getUserProgress = async () => {
    const res = await sendRequest<any>({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user-progress`,
    })

    return res
}

const createUserProgress = async (values: any) => {
    const res = await sendRequest<any>({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user-progress`,
        body: {
            ...values
        }
    })

    return res
}

const updateUserProgress = async (values: any) => {
    const res = await sendRequest<any>({
        method: "PATCH",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user-progress`,
        body: {
            ...values
        }
    })

    return res
}

export { getUserProgress, createUserProgress, updateUserProgress }