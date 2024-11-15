
import { getAllBudgets } from "@/data/getBudgets"
import BudgetCardWrapper from "@/components/budget/BudgetCardWrapper"


const BudgetCard = async () => {
    const budgets = await getAllBudgets()
    return (
        <div className="p-4 flex flex-col gap-2 ">
            <p className="sm:font-bold font-semibold sm:text-4xl text-xl">Recently Created <span className="text-green-500">Budgets</span></p>
            <div className="h-fit flex flex-col sm:flex-row flex-wrap gap-2 ">
                {
                    budgets && budgets.map((budget) => (
                        <BudgetCardWrapper key={budget.id} amount={budget.amount} id={budget.id} name={budget.name} />
                    ))
                }
            </div>
        </div>
    )
}

export default BudgetCard