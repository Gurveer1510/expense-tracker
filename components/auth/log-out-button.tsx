"use client"

import { Button } from "../ui/button"
import { logout } from "@/actions/logout"
import { useRouter } from "next/navigation"

const LogOutButton = ()  => {

    const router = useRouter()

    const clickHandler = async () => {
        try {
            await logout()
            router.push("/")    
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Button
        className="bg-transparent cursor-pointer hover:bg-white"
            onClick={clickHandler}
            asChild
        >
            <p className="text-red-600 hover:text-red-500 font-semibold">Log Out</p>
        </Button>
    )
}

export default LogOutButton