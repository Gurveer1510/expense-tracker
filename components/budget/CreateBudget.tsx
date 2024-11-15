"use client";

import { z } from "zod";
import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateBudgetSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { createBudget } from "@/actions/createBudget";
import {
    Form,
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
    FormField,
} from "@/components/ui/form";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { FormSuccess } from "../form/form-success";
import { FormError } from "../form/form-error";

const CreateBudget = () => {
    const router = useRouter()
    const [isPending, startTransaction] = useTransition();
    const [open, setOpen] = useState(false)
    const [success, setSuccess] = useState("");
    const [errors, setErrors] = useState("");
    const { data: session, status } = useSession()


    const form = useForm<z.infer<typeof CreateBudgetSchema>>({
        resolver: zodResolver(CreateBudgetSchema),
        defaultValues: {
            name: "",
            amount: 0,
            userId: '' ,
        },
    });

    const onSubmit = async (values: z.infer<typeof CreateBudgetSchema>) => {
        setSuccess("");
        setErrors("");
        const userId = session?.user?.id; 

        if (!userId) {
            setErrors("User ID is missing.");
            return;
        }
        const valuesWithUserId = {
            ...values,
            userId,  
        };
        console.log(values)
        startTransaction(async () => {
            const response = await createBudget(valuesWithUserId);
            if (response?.error) {
                setErrors(response.error);
            } else if (response?.success) {
                setSuccess(response.success);
                setOpen(false)
                router.push('/dashboard')
            }
        });
    };

    if(status == "loading") {
        return <p>Loading</p>
    }

    return (
        <div className="p-4">
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button className="text-black" variant="outline">
                        Create new Budget
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            <p className="text-black">Create a Budget</p>
                        </DialogTitle>
                    </DialogHeader>
                    <Card className="border-0 shadow-none">
                        <CardContent>
                            <Form {...form}>
                                <form
                                    className="space-y-6"
                                    onSubmit={form.handleSubmit(onSubmit)}
                                >
                                    <div className="space-y-4">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Budget Name</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            disabled={isPending}
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
                                                    <FormLabel>Amount</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            disabled={isPending}
                                                            type="number" // Ensure input type is correct
                                                            placeholder="Amount"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <FormSuccess message={success} />
                                    <FormError message={errors} />
                                    <Button
                                        disabled={isPending}
                                        type="submit"
                                        variant="default"
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
    );
};

export default CreateBudget;
