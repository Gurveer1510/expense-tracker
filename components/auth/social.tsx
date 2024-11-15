"use client"

import { FcGoogle } from "react-icons/fc"
import { Button } from "../ui/button"
import { signIn } from "next-auth/react"
import { DEFAULT_LOGIN_REDIRECT } from "@/route"

export const Social = () => {

    const onClick = async (provider: "google") => {
        await signIn(provider, {
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    }

    return (
        <div className="flex items-center w-full gap-x-2">
            <Button
                size={"lg"}
                className="w-full"
                onClick={() => onClick("google")}
                variant="outline"
            >
                <FcGoogle size={24} />
            </Button>
        </div>
    )
}
