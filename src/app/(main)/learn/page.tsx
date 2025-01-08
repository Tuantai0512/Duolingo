import * as React from 'react';
import StickyWrapper from './sticky-wrapper';
import FeedWrapper from './feed-wrapper';
import UserProgress from './user-progress';
import { title } from 'process';
import Header from './header';

export interface ILearnPageProps {
}

export default function LearnPage (props: ILearnPageProps) {
  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "french", imageSrc: "/images/french_flag.svg"}}
          hearts={5}
          points={1000}
          hasActiveSupcription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="English"/>
      </FeedWrapper>
    </div>
  );
}
