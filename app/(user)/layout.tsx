import LogOutButton from "@/components/auth/log-out-button"

const layout = ({children} : {children : React.ReactNode}) => {
    return (
        <div className="text-white">
            <LogOutButton />
            {children}
        </div>
    )
}

export default layout