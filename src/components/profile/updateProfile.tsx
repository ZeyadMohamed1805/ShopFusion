import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Separator } from "@radix-ui/react-separator";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { useMutation } from "react-query";
import axios from "@/apis/config";
import config from "@/apis/config";
import { userFormSchema } from "@/schemas/user";

const UpdateProfile = ({
	user,
	setTemp,
	setOpen,
}: {
	user: any;
	setTemp: React.Dispatch<any>;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const form = useForm<z.infer<typeof userFormSchema>>({
		resolver: zodResolver(userFormSchema),
		defaultValues: {
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			password: user.password,
			mobile: user.mobile,
			isAdmin: user.isAdmin,
			isBanned: user.isBanned,
		},
	});

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

	const { mutate } = useMutation("update_user", {
		mutationFn: async (body: any) => {
			const response = await axios.put(`/users/${user.userId}`, body);
			return response;
		},
		onSuccess: () => {
			config.get(`/users/${user.userId}`).then((response) => {
				setTemp(response.data.data);
				setOpen(false);
				showToast(
					"User Updated",
					"User updated successfully.",
					"Awesome!"
				);
			});
		},
		onError: () => {
			showToast(
				"User Not Updated",
				"Something went wrong. User was not updated.",
				"Got it!",
				true
			);
		},
	});

	const onSubmit = (values: any) => {
		mutate(values);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-4 flex flex-col items-center"
			>
				<h1 className="text-3xl text-center fw-bolder">Update User</h1>
				<FormField
					control={form.control}
					name="firstName"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>FirstName</FormLabel>
							<FormControl>
								<Input placeholder="firstName" {...field} />
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
								<Input placeholder="lastName" {...field} />
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

export default UpdateProfile;
