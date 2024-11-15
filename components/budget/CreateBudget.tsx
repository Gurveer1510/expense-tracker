"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { CreateBudgetSchema } from "@/schemas"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
    FormField
} from "@/components/ui/form"
import {
    Card,
    CardContent
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,

} from "@/components/ui/dialog"

const CreateBudget = () => {

    const form = useForm<z.infer<typeof CreateBudgetSchema>>({
        resolver: zodResolver(CreateBudgetSchema),
        defaultValues: {
            name: "",
            amount: 0,
            userId: ""
        }
    })

    
    const onSubmit = async (values: z.infer<typeof CreateBudgetSchema>) => {

    }

    return (

        <div className="p-4">

            <Dialog>
                <DialogTrigger asChild><Button className="text-black" variant={"outline"}>Create new Budget</Button></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            <p className="text-black">Create a Budget</p>
                        </DialogTitle>
                        <DialogDescription>
                        </DialogDescription>
                    </DialogHeader>
                    <Card className="border-0 shadow-none">
                        <CardContent>
                            <Form {...form}>
                                <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                                    <div className="space-y-4">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Budget Name
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="text"
                                                            placeholder="Budget Name"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="amount"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Amount
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="text"
                                                            placeholder="Amount"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        variant={'default'}
                                    >
                                        Create
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </DialogContent>
            </Dialog>
        </div>

    )
}

export default CreateBudget