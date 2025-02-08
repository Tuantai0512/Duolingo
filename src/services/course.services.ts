import { sendRequest } from "./api"
import { auth } from '@/auth';

export const getCourses = async () => {

    const res = await sendRequest<IBackendRes<ICourse[]>>({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/courses`,
    })

    return res
}

export const getCoursesById = async (id: string) => {

    const res = await sendRequest<IBackendRes<ICourse>>({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/courses/${id}`,
    })

    return res
}