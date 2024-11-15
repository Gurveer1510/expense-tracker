"use client"

import Link from "next/link"
import { Button } from "../ui/button"

interface BackButtonProps {
    label: string
    href: string
}

export const BackButton: React.FC<BackButtonProps> = ({
    label,
    href
}) => {
    return (
        <Button
            asChild
            variant={"link"}
            size={"sm"}
            className="w-full"
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    )
}