import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import Link from "next/link"

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
})

interface HeaderProps {
    label?: string
}

export const Header: React.FC<HeaderProps> = ({
    label
}) => {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center justify-center ">
            <Link
                href={"/"}
            >
            <h1 className={cn("text-3xl font-semibold", font.className)}>
                Spend<span className="text-green-400">Wise</span>
            </h1>
            </Link>
            <p className="text-muted-foreground text-sm">
                {label}
            </p>
        </div>
    )
}