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
import { RegisterSchema } from "@/schemas"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useForm } from "react-hook-form"
import { FormSuccess } from "../form/form-success"
import { FormError } from "../form/form-error"
import { register } from "@/actions/register"



export const RegisterForm = () => {

    const [isPending, startTransaction] = useTransition()
    const [errors, setErrors] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")

    const form = useForm<z.infer<typeof RegisterSchema>>(
        {
            resolver: zodResolver(RegisterSchema),
            defaultValues: {
                name: "",
                email: "",
                password: ""
            }
        }
    )

    const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
        setErrors("")
        setSuccess("")
        startTransaction(() => {
            register(values)
            .then((data) => {
                setSuccess(data.success)
                setErrors(data.error)
            })
        })
    }

    return (

        <div className="h-screen flex items-center justify-center">
            <CardWrapper
                headerLabel="Create an account"
                backButtonHref="/auth/login"
                backButtonLabel="Already have an account?"
                showSocial
            >
                <Form {...form}>
                    <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="name"
                                disabled={isPending}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="John Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>

                                )}
                            />
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
                        <FormSuccess message={success} />
                        <FormError message={errors} />
                        <Button
                            type="submit"
                            className="w-full text-md"
                            variant={"default"}
                            disabled={isPending}
                        >
                            Register
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
        </div>

    )
}