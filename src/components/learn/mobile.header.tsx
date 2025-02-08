import * as React from 'react';
import MobileSidebar from './mobile.sidebar';

export default function MobileHeader() {
  return (
    <nav className='flex items-center px-4 lg:hidden h-[50px] bg-blue-500'>
      <MobileSidebar />
    </nav>
  );
}
