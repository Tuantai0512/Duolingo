import { ChangePassword } from '@/components/auth/change.password';
import * as React from 'react';

export interface IAppProps {
}

export const metadata = {
  title: 'Quên mật khẩu',
  description: 'Thay đổi mật khẩu tài khoản Duolingo',
}

export default function App(props: IAppProps) {
  return (
    <div>
      <div className='flex flex-col mt-[100px] items-center'>
        <ChangePassword />
      </div>
    </div>
  );
}
