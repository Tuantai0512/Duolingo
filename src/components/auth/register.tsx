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
import { sendRegister } from "@/services/auth.services"
import { toast } from "sonner"

const formSchema: z.ZodType<RegisterInput> = z.object({
    email: z.string().min(1, {
        message: "Username must be at least 1 characters.",
    }).email({
        message: "please enter your email!"
    }),
    password: z.string().min(1, {
        message: "Password must be at least 1 characters.",
    }),
    name: z.string(),
})

export function Register() {
    // 1. Define your form.
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            name: ""
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const res = await sendRegister(values);
        if(res?.data){
            toast("Created Account", {
                description: "Tài khoản đã được tạo thành công!",
            })
            router.push("/login")
        }else{
            toast("Call API error", {
                description: res?.message
            })
        }
    }

    return (
        <div>
            <h1 className="text-center text-[26px] font-bold m-[15px]">Tạo hồ sơ</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-[375px]">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className="placeholder:text-[16px]" placeholder="Tên (Tùy chọn)" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                    <Button className="bg-[#1cb0f6] border-[#1899d6] hover:bg-[#1cb0f6cc] w-full" type="submit">Đăng ký</Button>
                </form>
            </Form>
        </div>
    )
}