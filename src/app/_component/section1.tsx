'use client'

import * as React from 'react';
import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
export interface ISection1Props {
  title: string,
  content: React.ReactElement,
  image: string,
  reverse?: boolean,
  linkBtn?: string,
  textBtn?: string,
}

const sectionFont = localFont({
  src: '../fonts/FeatherBold.woff2',
  display: 'swap',
})

export default function Section1(props: ISection1Props) {
  return (
    <section className={`flex ${props.reverse ? 'flex-row-reverse' : ''} items-center gap-[101px] mx-auto my-0 w-[988px]`}>
      <div className='flex flex-col gap-[24px] max-w-full shrink-0'>
        <h2 className={`${sectionFont.className} text-[48px] max-w-[503px] text-[#58cc02] font-bold`}>{props.title}</h2>
        <span className='text-[17px] leading-[24px] font-medium text-[#777777] max-w-[473px]'>{props.content}</span>
        {
          props.linkBtn &&
          <Link href={props.linkBtn} className='max-w-[330px] w-full'>
            <Button variant={"ghost"}>
              <span className="text-[#1cb1f6] uppercase tracking-[.8px]">{props.textBtn}</span>
            </Button>
          </Link>
        }
      </div>
      <Image
        alt="landing page image"
        src={props.image}
        width={530}
        height={530}
      />
    </section>
  );
}
