"use server"

import { getCoursesById } from "@/services/course.services"
import { createUserProgress, getUserProgress, updateUserProgress } from "@/services/user-progress.services";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upsertUserProgress = async (courseId: string) => {

    const course = await getCoursesById(courseId);

    if (!course) throw new Error("Course not found!");

    const existingUserProgress = await getUserProgress();

    if (existingUserProgress.data) {
        await updateUserProgress({
            activeCourseId: courseId
        })
        revalidatePath("/courses")
        revalidatePath("/learn")
        redirect("/learn")
    }

    await createUserProgress({
        activeCourseId: courseId
    })

    revalidatePath("/courses")
    revalidatePath("/learn")
    redirect("/learn")
}