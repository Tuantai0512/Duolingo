import { Login } from '@/components/auth/login';
import NavButton from '@/components/auth/nav.button';
import * as React from 'react';

export const metadata = {
  title: 'Đăng nhập',
  description: 'Đăng nhập vào Duolingo',
}

export interface IAppProps {
}

export default function LoginPage(props: IAppProps) {
  return (
    <div>
      <NavButton link="/register" label='Đăng ký' />
      <div className='flex justify-center'>
        <Login />
      </div>
    </div>
  );
}
