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

const Register = () => {
	const formSchema = z.object({
		FirstName: z
			.string()
			.min(4, { message: "First Name must be at least 4 characters" })
			.max(30, { message: "First Name must be at most 30 characters" }),
		LastName: z
			.string()
			.min(4, { message: "Last Name must be at least 4 characters" })
			.max(30, { message: "Last Name must be at most 30 characters" }),
		Email: z
			.string()
			.regex(
				new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
				{
					message: "Invalid email",
				}
			),
		Password: z
			.string()
			.min(8, { message: "Password must be at least 8 characters." })
			.regex(new RegExp(/^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)).+$/), {
				message: "Invalid password",
			}),
		Mobile: z.string().regex(new RegExp(/^[0-9]{10}$/), {
			message: "Mobile number must be 10 digits",
		}),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			FirstName: "",
			LastName: "",
			Email: "",
			Password: "",
			Mobile: "",
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log(values);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-4 flex flex-col items-center"
			>
				<h1 className="text-3xl text-center fw-bolder">Register</h1>
				{/* <div className="w-full flex items-stretch gap-4"> */}
				<FormField
					control={form.control}
					name="FirstName"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>First Name</FormLabel>
							<FormControl>
								<Input placeholder="First Name" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="LastName"
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
				{/* </div> */}
				<FormField
					control={form.control}
					name="Email"
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
					name="Password"
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
					name="Mobile"
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
				<Button className="w-full" type="submit">
					Submit
				</Button>
			</form>
		</Form>
	);
};

export default Register;
