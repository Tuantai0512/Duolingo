import { sendRequest } from "./api"
import { auth } from '@/auth';

export const getCourses = async () => {

    const res = await sendRequest<any>({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/courses`,
    })

    return res
}