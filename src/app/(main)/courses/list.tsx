"use client"
import { useTransition } from 'react';
import Card from './card';
import { useRouter } from 'next/navigation';
import { upsertUserProgress } from '@/actions/user-progress';

export interface IListProps {
    courses: IBackendRes<ICourse[]>,
    activeCourseId: string
}

export default function List({ courses, activeCourseId }: IListProps) {

    const router = useRouter();
    const [pending, startTransition] = useTransition();

    const onClick = (id: string) => {
        if(pending) return;

        if(id === activeCourseId) {
            return router.push("/learn")
        }

        startTransition(() => {
            upsertUserProgress(id)
        })
    }

    return (
        <div className='pt-6 grid grid-cols-2 gap-[8px] lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]'>
            {courses.data?.map((course: ICourse) => {
                return(
                    <Card 
                        key={course._id}
                        id={course._id}
                        title={course.title}
                        imageSrc={course.imageSrc}
                        onClick={onClick}
                        disabled={false}
                        active={course._id === activeCourseId}
                    />
                )
            })}
        </div>
    );
}
