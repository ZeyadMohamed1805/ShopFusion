"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@radix-ui/react-separator";
import { registerFormSchema } from "@/schemas/register";
import { useForm } from "react-hook-form";
import useApi from "@/apis/useApi";
import { z } from "zod";
import { EApiMethod } from "@/types/enums";
import UseMutation from "@/apis/useMutation";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

const Register = () => {
	const { toast } = useToast();

	const showToast = (
		title: string,
		description: string,
		action: string,
		destructive: boolean = false
	) => {
		toast({
			title: title,
			description: description,
			variant: destructive ? "destructive" : "default",
			action: <ToastAction altText="Can't wait!">{action}</ToastAction>,
		});
	};
	const { mutate, isSuccess, isLoading, isError, data, error } = UseMutation(
		"/users/register",
		() =>
			showToast(
				"Registration Successful",
				"Your account has been created successfully.",
				"Awesome!"
			),
		() =>
			showToast(
				"Registration Failed",
				"Something went wrong during registration. Please try again later.",
				"Got It!",
				true
			)
	);

	const form = useForm<z.infer<typeof registerFormSchema>>({
		resolver: zodResolver(registerFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			mobile: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof registerFormSchema>) => {
		mutate(values);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-4 flex flex-col items-center"
			>
				<h1 className="text-3xl text-center fw-bolder">Register</h1>
				<div className="w-full flex items-stretch flex-col md:flex-row gap-4">
					<FormField
						control={form.control}
						name="firstName"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>First Name</FormLabel>
								<FormControl>
									<Input
										placeholder="First Name"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="lastName"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Last Name</FormLabel>
								<FormControl>
									<Input placeholder="Last Name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="email"
									type="email"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									placeholder="password"
									type="password"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="mobile"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>Mobile</FormLabel>
							<FormControl>
								<Input placeholder="Mobile" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Separator />
				<Button className={`w-full`} disabled={isLoading} type="submit">
					{isLoading ? "Loading..." : "Submit"}
				</Button>
			</form>
		</Form>
	);
};

export default Register;
