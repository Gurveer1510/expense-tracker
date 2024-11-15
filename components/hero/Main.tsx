import Link from "next/link"
import { GridBackground } from "../ui/GridBackGround"
import { TypewriterEffect } from "../ui/typewriter-effect"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

const Main = () => {
    return (
        <div className="min-h-full w-full flex justify-center" >

            <GridBackground>
                <div className="w-42 pb-20 flex flex-col gap-4 text-lg lg:text-5xl">
                    <div>
                        <div className="p-2">

                            <TypewriterEffect
                                cursorClassName="h-[38px]"
                                words={
                                    [
                                        { text: "Spend", className: "text-white text-5xl sm:text-7xl" },
                                        { text: "Wise", className: "text-green-400 text-5xl sm:text-7xl" }
                                    ]
                                } />

                        </div>
                        <div className="px-3 text-center">
                            <div>
                                &quot;Track your spending, grow your savings.
                            </div>
                            <div>
                                Your financial journey starts here.&quot;
                            </div>
                        </div>
                    </div>

                    <Button
                        asChild
                        variant={"secondary"}
                        size={"sm"}
                        className="w-fit sm:hidden mx-auto sm:w-52"
                    >
                        <Link href="/auth/login">
                            <div className="flex items-center gap-2 cursor-pointer ">
                                <p className=" lg:text-xl text-sm font-bold ">Dashboard</p>
                                <ArrowRight className="text-black" size={20} />
                            </div>
                        </Link>

                    </Button>


                    <Button
                        asChild
                        variant={"secondary"}
                        size={"lg"}
                        className="w-fit invisible sm:visible mx-auto sm:w-52"
                    >
                        <Link href="/auth/login">
                            <div className="flex items-center gap-2 cursor-pointer ">
                                <p className=" lg:text-xl text-sm font-bold ">Dashboard</p>
                                <ArrowRight className="text-black" size={20} />
                            </div>
                        </Link>

                    </Button>
                </div>
            </GridBackground>
        </div>
    )
}

export default Main