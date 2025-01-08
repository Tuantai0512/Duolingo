"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { IChangePasswordProgress } from "@/models/next-auth"
import { retryPassword } from "@/services/auth.services"
import { toast } from "sonner"

const formSchema = z.object({
    email: z.string().min(1, {
        message: "Email must be at least 1 characters.",
    }).email({
        message: "please enter your email!"
    })
})

export function Step1(props: IChangePasswordProgress) {
    // 1. Define your form.
    const { setProgress, setUserEmail } = props;
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const { email } = values;
        const res = await retryPassword(email);
        if (res?.data) {
            setUserEmail(res?.data?.email)
            setProgress(50);
        } else {
            toast("Call APIs error", {
                description: res?.message,
            })
        }

    }

    return (
        <div className="flex flex-col items-center">
            <div className="my-[20px] mx-0">
                <p className='text-center'>Để thực hiện thay đổi mật khẩu, vui lòng nhập email tài khoản của bạn để nhận mã code.</p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-[375px]">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className="placeholder:text-[16px]" placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="bg-[#1cb0f6] border-[#1899d6] hover:bg-[#1cb0f6cc] w-full" type="submit">Gửi mã</Button>
                </form>
            </Form>
        </div>
    )
}