
import { getAllBudgets } from "@/data/getBudgets"
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
    CardDescription
} from "@/components/ui/card"
import BudgetCardWrapper from "@/components/budget/BudgetCardWrapper"
import CreateBudget from "./CreateBudget"


const BudgetCard = async () => {
    const budgets = await getAllBudgets()
    return (
        <div className="px-4 pt-2 flex flex-col">
            <Card className="col-span-full bg-black border-gray-700">
                <CardHeader>
                    <CardTitle className="text-xl text-gray-100">Your recent budgets</CardTitle>
                    <CardDescription className="text-gray-400">Overview of your budget categories</CardDescription>
                </CardHeader>
                <CardContent>
                    {
                        budgets.map((budget) => (
                            <div className="flex flex-col my-2">
                                <BudgetCardWrapper
                                amount={budget.amount}
                                id={budget.id}
                                name={budget.name}
                                spent={budget.spent}
                            />
                            </div>
                        ))
                    }
                </CardContent>
                <CardFooter className="flex justify-center">
                    <CreateBudget/>
                </CardFooter>
            </Card>
        </div>
    )
}

export default BudgetCard