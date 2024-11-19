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
            // variant={'outline'}
            className="bg-transparent cursor-pointer hover:bg-white outline outline-1 " 
            onClick={clickHandler}
            asChild
        >
            <p className="text-red-600 font-semibold">Log Out</p>
        </Button>
    )
}

export default LogOutButton