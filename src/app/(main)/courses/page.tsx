import { getCourses } from "@/services/course.services";
import List from "./list";
import { getUserProgress } from "@/services/user-progress.services";

export default async function CoursePage() {

  const coursesData = getCourses();
  const userProgressData = getUserProgress();
  const [courses, userProgress] = await Promise.all([coursesData, userProgressData]);

  return (
    <div className='h-full max-w-[912px] px-3 mx-auto lg:pt-[20px]'>
      <h1 className='text-2xl font-bold text-neutral-700'>
        Language Courses
      </h1>
      <List
        courses={courses}
        activeCourseId={userProgress?.data.activeCourseId}
      />
    </div>
  );
}
