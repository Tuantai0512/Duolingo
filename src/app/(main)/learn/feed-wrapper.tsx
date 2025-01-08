import * as React from 'react';

export interface IFeedWrapperProps {
    children: React.ReactNode
}

export default function FeedWrapper ({ children }: IFeedWrapperProps) {
  return (
    <div className='flex-1 relative top-0 pb-10'>
      {children}
    </div>
  );
}
