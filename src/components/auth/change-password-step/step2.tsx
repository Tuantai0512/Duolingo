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
import { toast } from "sonner"
import { changePassword } from "@/services/auth.services"

const formSchema = z.object({
    code: z.string().min(1, {
        message: "Code must be at least 1 characters.",
    }),
    password: z.string().min(1, {
        message: "Password must be at least 1 characters.",
    }),
    confirmPassword: z.string().min(1, {
        message: "Confilm password must be at least 1 characters.",
    }),
})

export function Step2(props: IChangePasswordProgress) {

    const { setProgress, userEmail } = props;
    // 1. Define your form.
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            code: "",
            password: "",
            confirmPassword: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const{ code, password, confirmPassword } = values;
        if(password !== confirmPassword){
            toast("Invalid input!", {
                description:  "Mật khẩu xác thực không trùng khớp!"
            })
            return
        }
        const res = await changePassword({email: userEmail, password, confirmPassword, code});

        if (res?.data) {
            setProgress(100);
        } else {
            toast("Call APIs error", {
                description: res?.message,
            })
            setProgress(0);
        }
    }

    return (
        <div className="w-full">
            <div className="my-[20px] mx-0">
                <p className='text-center'>Vui lòng thực hiện đổi mật khẩu.</p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-[375px]">
                    <FormField
                        control={form.control}
                        name="code"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className="placeholder:text-[16px]" placeholder="Code" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className="placeholder:text-[16px]" placeholder="Mật khẩu" {...field} type="password" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className="placeholder:text-[16px]" placeholder="Xác nhận mật khẩu" {...field} type="password" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="bg-[#1cb0f6] border-[#1899d6] hover:bg-[#1cb0f6cc] w-full" type="submit">Đổi mật khẩu</Button>
                </form>
            </Form>
        </div>
    )
}