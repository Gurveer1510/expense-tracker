'use server'

import { signOut } from "@/auth";

export const logout = async () => {
    
    try {
        await signOut({
            redirectTo: "/"
        })
        
    } catch (error) {
        console.log(error)
    }
}