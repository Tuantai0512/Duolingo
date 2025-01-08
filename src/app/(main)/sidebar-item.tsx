'use client'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import * as React from 'react';

export interface ISideBarItemProps {
  img: string,
  href: string,
  text: string
}

export default function SideBarItem(props: ISideBarItemProps) {

  const { img, href, text } = props;
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button variant={active ? "sidebarOutline" : "sidebar"} className='h-max w-full px-3 py-2 mb-2'>
      <Link href={href} className='flex gap-4 h-[40px] items-center rounded-lg'>
        <Image
          alt="Learn"
          src={img}
          width={32}
          height={32}
        />
        <span className='uppercase font-bold'>{text}</span>
      </Link>
    </Button>
  );
}
