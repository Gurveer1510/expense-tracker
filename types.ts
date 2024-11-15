import { BudgetCardSchema } from "./schemas";
import z from "zod"

export type BudgetCardType = z.infer<typeof BudgetCardSchema>