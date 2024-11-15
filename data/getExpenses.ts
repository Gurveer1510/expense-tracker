import { db } from "@/lib/db";
import { ExpenseSchema } from "@/schemas";
import z from "zod"

type ExpenseType = z.infer<typeof ExpenseSchema>

export const getExpenses = async (budgetId: string) : Promise<ExpenseType[] >   => {
    try {
        if(!budgetId){
            throw new Error("Budget not provided.")
        }
        const expenses = await db.expense.findMany({
            where:{
                id: budgetId
            }
        })
        return expenses || []
    } catch (error) {
        throw new Error("Something went wrong")
    }
}