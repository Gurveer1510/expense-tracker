import { db } from "@/lib/db";
import { BudgetCardSchema } from "@/schemas";
import z from "zod"

type BudgetType = z.infer<typeof BudgetCardSchema>

export const getAllBudgets = async () :  Promise<BudgetType[]>  =>{
    try {
        const budgets = await db.budget.findMany({
            orderBy: {
                createdAt: "desc"
            },
            take: 3
        })

        return budgets || []
    } catch (error) {
        return []
    }
}