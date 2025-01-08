import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

export interface IHeaderProps {
    title: string;
}

export default function Header({
    title
}: IHeaderProps) {
    return (
        <div className='sticky top-0 bg-white pb-3 lg:pt-[28px] flex items-center 
    justify-between border-b-2 mb-5 text-neutral-500 lg:z-50'>
            <Link href={"#"}>
                <Button variant={"ghost"}>
                    <ArrowLeft />
                </Button>
            </Link>
        </div>
    );
}
