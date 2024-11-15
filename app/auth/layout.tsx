import { GridBackground } from "@/components/ui/GridBackGround";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <GridBackground className="h-screen overflow-hidden" childrenClassName="text-lg sm:text-lg font-thin">
            {children}
        </GridBackground>

    );
}
