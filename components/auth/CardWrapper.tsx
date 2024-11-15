"use client"

import {
    Card,
    CardHeader,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import { BackButton } from "./back-button"
import { Header } from "./header"
import { Social } from "./social"

interface CardWrapperprops {
    children: React.ReactNode
    headerLabel: string
    backButtonLabel: string
    backButtonHref: string
    showSocial?: boolean
}

export const CardWrapper: React.FC<CardWrapperprops> = ({
    children,
    headerLabel,
    backButtonHref,
    backButtonLabel,
    showSocial
}) => {
    return (
        <Card className="w-[300px] lg:w-[450px] ">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {
                showSocial && (
                    <CardFooter>
                        <Social />
                    </CardFooter>
                )
            }
            <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref} />
            </CardFooter>
        </Card>
    )
}