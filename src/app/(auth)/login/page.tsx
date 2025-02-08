import { Login } from '@/components/auth/login';
import NavButton from '@/components/auth/nav.button';
import * as React from 'react';

export const metadata = {
  title: 'Đăng nhập',
  description: 'Đăng nhập vào Duolingo',
}
export default function LoginPage() {
  return (
    <div>
      <NavButton link="/register" label='Đăng ký' />
      <div className='flex justify-center'>
        <Login />
      </div>
    </div>
  );
}
