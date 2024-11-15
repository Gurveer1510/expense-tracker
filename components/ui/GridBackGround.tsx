import { cn } from "@/lib/utils";
import React from "react";

interface GridBackGroundProps {
    children: React.ReactNode
    className?: string
    childrenClassName?: string
}

export const GridBackground : React.FC<GridBackGroundProps> = ({
    children,
    className,
    childrenClassName
}) => {
    return (
        <div className={cn("h-[39.5rem] w-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center", className)}>
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className={cn("text-4xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8", childrenClassName)}>
            {children}
            </div>
        </div>
    );
}
