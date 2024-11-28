import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required "
    }),
    password: z.string().min(2, {
        message: "Password is required"
    }),
})

export const RegisterSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required"
    }),
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(6, {
        message: "Password must have at least 6 characters"
    })
})

export const BudgetCardSchema = z.object({
    id: z.string(),
    name: z.string({
        message: "Budget name is required"
    }),
    amount: z.number({
        message: "Amount can't be empty."
    }),
    spent: z.number().optional()
})

export const ExpenseSchema = z.object({
    id: z.string(),
    description: z.string(),
    amount: z.number(),
    date: z.date(),
    budgetId: z.string()
})


export const CreateBudgetSchema = z.object({
    name: z.string().min(3, "Budget name is required"),
    amount: z.coerce.number().min(1, "Amount must be a positive number"),
    userId: z.string()
})