"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { CardWrapper } from "./CardWrapper"
import { useTransition, useState } from "react"
import {
    Form,
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
    FormField
} from "@/components/ui/form"
import { z } from "zod"
import { LoginSchema } from "@/schemas"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useForm } from "react-hook-form"
import { login } from "@/actions/login"
import { FormSuccess } from "../form/form-success"
import { FormError } from "../form/form-error"


export const LoginForm = () => {

    const [isPending, startTransaction] = useTransition()
    const [errors, setErrors] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")

    const form = useForm<z.infer<typeof LoginSchema>>(
        {
            resolver: zodResolver(LoginSchema),
            defaultValues: {
                email: "",
                password: ""
            }
        }
    )

    const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
        setErrors("")
        setSuccess("")
        startTransaction(() => {
            login(values)
            .then((data) => {
                // setSuccess(data.success)
                setErrors(data?.error)
            })
        })
    }

    return (
        
            <div className="h-screen flex items-center justify-center">
                <CardWrapper
                    headerLabel="Welcome back"
                    backButtonHref="/auth/register"
                    backButtonLabel="Don't have an account"
                    showSocial
                >
                    <Form {...form}>
                        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    disabled={isPending}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="john.doe@xyz.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>

                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="password"
                                    disabled={isPending}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" placeholder="******" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormSuccess message={success}/>
                            <FormError message={errors} />
                            <Button
                                type="submit"
                                className="w-full text-md"
                                variant={"default"}
                                disabled={isPending}
                            >
                                Login
                            </Button>
                        </form>
                    </Form>
                </CardWrapper>
            </div>
        
    )
}