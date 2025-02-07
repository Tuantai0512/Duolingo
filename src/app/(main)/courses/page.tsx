import { getCourses } from "@/services/course.services";
import List from "./list";

export interface ICoursePageProps {
}

export default async function CoursePage (props: ICoursePageProps) {

  const courses = await getCourses();

  return (
    <div className='h-full max-w-[912px] px-3 mx-auto lg:pt-[20px]'>
      <h1 className='text-2xl font-bold text-neutral-700'>
        Language Courses
      </h1>
      <List 
        courses={courses}
        activeCourseId={'6791a2a37fc405edd310f948'}
      />
    </div>
  );
}
