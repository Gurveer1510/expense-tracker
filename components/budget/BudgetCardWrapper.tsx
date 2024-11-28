"use client"

import Link from "next/link"

import { Progress } from "@/components/ui/progress"
import { BudgetCardType } from "@/types"
import { Wallet } from "lucide-react"

const BudgetCardWrapper: React.FC<BudgetCardType> = ({
    id,
    name,
    amount,
    spent
}) => {

    const progressPercentage = (spent || 0 / amount) * 100
    return (
        <Link
            className="h-fit"
            href={`/budget/${id}`}
        >
            <div key={id} className="flex items-center bg-gray-900 px-4 py-2 rounded-lg">
                <div className="bg-gray-700 p-2 rounded-full mr-4">
                    <Wallet />
                </div>
                <div className="flex-1">

                    <p className="text-xl text-white font-semibold leading-none mb-1">{name}</p>
                    <p className="text-sm text-gray-400">
                        ${spent} / ${amount}
                    </p>
                </div>
                <div className="w-[60%] ml-4">
                    <Progress
                        value={progressPercentage}
                        className="h-2 bg-gray-700"
                        indicatorClassName={`bg-gradient-to-r ${progressPercentage < 50 ? 'from-green-500 to-green-600' :
                            progressPercentage < 80 ? 'from-yellow-500 to-yellow-600' :
                                'from-red-500 to-red-600'
                            }`}
                    />
                </div>
            </div>
        </Link >
    )
}

export default BudgetCardWrapper