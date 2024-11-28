'use server'

import { db } from "@/lib/db"
import { CreateBudgetSchema } from "@/schemas"
import * as z from "zod"


export const createBudget = async ({name, amount, userId } : z.infer<typeof CreateBudgetSchema> ) => {
    try {
        console.log(name,amount,userId)

        if(!name || !amount || !userId){
            return {
                error: "Incomplete data."
            }
        }
        
        await db.budget.create({
            data: {
                name: name,
                amount: amount,
                userId: userId,
                spent: 0
            }
        })
        return {
            success: "Budget created!"
        }
    } catch (error) {
        return {
            error: "Something went wrong."
        }
    }
}