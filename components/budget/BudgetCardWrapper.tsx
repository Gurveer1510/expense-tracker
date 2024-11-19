"use client"

import Link from "next/link"
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BudgetCardType } from "@/types"

const BudgetCardWrapper: React.FC<BudgetCardType> = ({
    id,
    name,
    amount,
    left
}) => {

    return (
        <Link
        className="h-fit"
            href={`/budget/${id}`}
        >
            <Card
                className=" sm:w-[450px] h-[110px] sm:h-[123px] bg-black text-white flex flex-col -space-y-3 border border-white " 
                >
                <CardHeader className="p:1 sm:p-6  ">
                    <p className="text-xl sm:text-3xl font-semibold ">{name}</p>
                </CardHeader>
                <CardContent className="h-fit">
                    <Progress indicatorClassName="bg-green-500 " max={amount} value={left} />
                    <p className="text-sm float-right ">₹{amount} left</p>
                    <CardFooter className="pl-0 pt-4 text-white text-xs z-10 ">
                    click to see expenses
                </CardFooter>
                </CardContent>
                
            </Card>

        </Link>
    )
}

export default BudgetCardWrapper