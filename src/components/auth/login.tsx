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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginFormSchema } from "@/schemas/login";

const Login = () => {
	const form = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			Email: "",
			Password: "",
		},
	});

	const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
		console.log(values);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-4 flex flex-col items-center"
			>
				<h1 className="text-3xl text-center fw-bolder">Login</h1>
				<FormField
					control={form.control}
					name="Email"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="Email"
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
					name="Password"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									placeholder="Password"
									type="password"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Separator />
				<Button className="w-full" type="submit">
					Submit
				</Button>
			</form>
		</Form>
	);
};

export default Login;
