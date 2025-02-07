"use client"
import * as React from 'react';
import Card from './card';

export interface IListProps {
    courses: any,
    activeCourseId: string
}

export default function List(props: IListProps) {

    const { courses, activeCourseId } = props;

    return (
        <div className='pt-6 grid grid-cols-2 gap-[8px] lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]'>
            {courses.data.map((course: any) => {
                return(
                    <Card 
                        key={course._id}
                        id={course._id}
                        title={course.title}
                        imageSrc={course.imageSrc}
                        onClick={() => {}}
                        disabled={false}
                        active={course._id === activeCourseId}
                    />
                )
            })}
        </div>
    );
}
