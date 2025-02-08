import Image from 'next/image';
import * as React from 'react';
import SideBarItem from './sidebar-item';

export interface IAppProps {
  className: string
}

export default function Sidebar ({ className }: IAppProps) {

  return (
    <div className={`${className} lg:w-[256px] px-4 h-full lg:fixed `}>
      <div className='px-4 py-8'>
        <Image 
          alt="Duolingo"
          src="/images/logo_mobile.svg"
          width={128}
          height={30}
        />
      </div>
      <SideBarItem img="/images/house.svg" href='/learn' text='Học'/>
      <SideBarItem img="/images/mouth.svg" href='/charaters' text='Phát âm'/>
      <SideBarItem img="/images/shield.svg" href='/leaderboard' text='Bảng xếp hạng'/>
      <SideBarItem img="/images/chest.svg" href='/quests' text='Nhiệm vụ'/>
      <SideBarItem img="/images/ellipsis.svg" href='/quests' text='Xem thêm'/>
    </div>
  );
}
