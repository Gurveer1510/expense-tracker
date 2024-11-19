import LogOutButton from "@/components/auth/log-out-button"

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="text-white w-screen flex flex-col">
            <div className="px-2 pt-3 flex justify-end ">
                <LogOutButton />
            </div>
            {children}
        </div>
    )
}

export default layout