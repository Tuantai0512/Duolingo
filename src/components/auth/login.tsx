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
import { authenticate } from "@/actions/auth"
import Link from "next/link"

const formSchema = z.object({
    email: z.string().min(1, {
        message: "Username must be at least 1 characters.",
    }).email({
        message: "please enter your email!"
    }),
    password: z.string().min(1, {
        message: "Password must be at least 1 characters.",
    }),
})

export function Login() {
    // 1. Define your form.
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const{ email, password } = values;
        const res = await authenticate(email, password);
        if (res?.error) {
            console.log(res?.error)
        } else {
            router.push('/learn');
        }
    }

    return (
        <div className="flex flex-col items-center w-full">
            <h1 className="text-center text-[26px] font-bold m-[15px]">Đăng nhập</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-[375px]">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className="placeholder:text-[16px]" placeholder="Email hoặc tên đăng nhập" {...field} />
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
                                <div className="relative">
                                    <Input className="placeholder:text-[16px]" placeholder="Mật khẩu" {...field} type="password" />
                                    <Link href='/forgot-password' className="text-[#afafaf] uppercase  underline-offset-4 font-bold tracking-[.8px] absolute right-[15px] top-[7px] hover:text-[#777777]">Quên?</Link>
                                </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="bg-[#1cb0f6] border-[#1899d6] hover:bg-[#1cb0f6cc] w-full" type="submit">Đăng nhập</Button>
                </form>
            </Form>
        </div>
    )
}