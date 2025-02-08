import { Button } from '@/components/ui/button';
import { IChangePasswordProgress } from '@/models/next-auth';
import Link from 'next/link';
import * as React from 'react';

export default function Step3() {
    return (
        <div>
            <div className="my-[20px] mx-0">
                <p className='text-center'>Tài khoản của bạn đã được thay đổi mật khẩu thành công. Vui lòng đăng nhập lại</p>
            </div>
            <Link href="/login">
                <Button className="bg-[#1cb0f6] border-[#1899d6] hover:bg-[#1cb0f6cc] w-full" type="submit">Đăng nhập</Button>
            </Link>
        </div>
    );
}
