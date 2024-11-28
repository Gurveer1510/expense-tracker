import BudgetCard from "@/components/budget/BudgetCard"
import { SessionProvider } from "next-auth/react"

const page = async () => {
    return (
        <SessionProvider>
            <div className="mt-2 w-screen p-4 flex flex-col ">
                <div className="text-4xl font-bold">
                    Dashboard
                </div>
                <BudgetCard />
            </div>
        </SessionProvider>
    )
}

export default page