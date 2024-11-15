import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

interface FormErrorProps{
    message?: string
}

export const FormError : React.FC<FormErrorProps> = ({
    message
}) => {
    if(!message) return null

    return (
        <div className="bg-destructive/15 p-3 rounded-md flex gap-x-2 items-center text-sm text-destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <p>{message}</p>
        </div>
    )
}