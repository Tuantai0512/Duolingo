import { ReactNode } from "react";

export interface IStickyWrapperProps {
    children: ReactNode;
}

export default function StickyWrapper ({ children } : IStickyWrapperProps) {
  return (
    <div className="hidden lg:block w-[368px] sticky z-1 self-end bottom-6">
      <div className="min-h-[calc(100vh-48px)] sticky top-6 flex flex-col gap-y-4">
        {children}
      </div>
    </div>
  );
}
