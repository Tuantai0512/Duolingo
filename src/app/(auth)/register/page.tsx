import NavButton from '@/components/auth/nav.button';
import { Register } from '@/components/auth/register';
import * as React from 'react';


export const metadata = {
    title: 'Đăng Ký',
    description: 'Đăng Ký vào Duolingo',
}

export interface IAppProps {
}

export default function RegisterPage(props: IAppProps) {
    return (
        <div>
            <NavButton link="/login" label='Đăng nhập' />
            <div className='flex justify-center'>
                <Register />
            </div>
        </div>
    );
}