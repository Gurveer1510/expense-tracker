import BudgetCard from "@/components/budget/BudgetCard"
import CreateBudget from "@/components/budget/CreateBudget"
import { SessionProvider } from "next-auth/react"

const page = async () => {
    return (
        <SessionProvider>
            <div className="w-screen p-4 flex flex-col ">
                <BudgetCard />
                <CreateBudget />
            </div>
        </SessionProvider>
    )
}

export default page