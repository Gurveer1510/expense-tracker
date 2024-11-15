"use server"

import { signIn } from "@/auth"

export const socialSignIn = (provider : "google") => {
    signIn()
}