import * as React from 'react';

export interface ISection1Props {
    title: string,
    content: React.ReactElement,
    image: string
}

export default function Section1 (props: ISection1Props) {
  return (
    <section className='flex flex-row gap-[101px] mx-auto my-0 w-[988px]'>
      <div>
        <h2>{props.title}</h2>
      </div>
    </section>
  );
}
