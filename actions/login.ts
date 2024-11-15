"use server"

import * as z from "zod"
import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/route"
import { AuthError } from "next-auth"
import { getUserByEmail } from "@/data/user"
import { LoginSchema } from "@/schemas"

export const login = async (values: z.infer<typeof LoginSchema>) => {

    const validatedFields = LoginSchema.safeParse(values)

    if (!validatedFields.success) {
        return {
            error: "Invalid Fields"
        }
    }

    const {
        email,
        password
    } = validatedFields.data

    const exisingUser = await getUserByEmail(email)

    if (!exisingUser || !exisingUser.email || !exisingUser.password) {
        return {
            error: "User does not exist"
        }
    }

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalide Credentials" }
                default:
                    return { error: "Something went wrong" }
            }
        }
        throw error
    }

}