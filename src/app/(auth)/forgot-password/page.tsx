import { ChangePassword } from '@/components/auth/change.password';
import * as React from 'react';

export const metadata = {
  title: 'Quên mật khẩu',
  description: 'Thay đổi mật khẩu tài khoản Duolingo',
}

export default function App() {
  return (
    <div>
      <div className='flex flex-col mt-[100px] items-center'>
        <ChangePassword />
      </div>
    </div>
  );
}
