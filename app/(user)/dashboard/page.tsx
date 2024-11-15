import BudgetCard from "@/components/budget/BudgetCard"
import CreateBudget from "@/components/budget/CreateBudget"

const page = () => {

    return (

        <div className="w-screen p-4 flex flex-col ">
            <BudgetCard />
            <CreateBudget />
        </div>


    )
}

export default page