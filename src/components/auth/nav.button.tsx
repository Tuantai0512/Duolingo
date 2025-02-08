import Link from 'next/link';
import * as React from 'react';
import { Button } from '../ui/button';

export interface INavButtonProps {
    link: string;
    label: string;
}

export default function NavButton({ link, label }: INavButtonProps) {
    return (
        <div className='flex flex-row-reverse'>
            <Link href={link}>
                <Button variant={"ghost"}>
                    <span className="text-[#1cb1f6] uppercase tracking-[.8px]">{label}</span>
                </Button>
            </Link>
        </div>
    );
}
