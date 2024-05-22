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
import { TCategoryType } from "@/types/types";
import { categoryFormSchema } from "@/schemas/category";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { useMutation } from "react-query";
import axios from "@/apis/config";

const UpdateCategory = ({ category }: { category: TCategoryType }) => {
	const form = useForm<z.infer<typeof categoryFormSchema>>({
		resolver: zodResolver(categoryFormSchema),
		defaultValues: {
			categoryId: category.categoryId,
			categoryName: category.categoryName,
			categoryDescription: category.categoryDescription,
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

	const { mutate } = useMutation("update_category", {
		mutationFn: async (body: any) => {
			const response = await axios.put(
				`/categories/${body.categoryId}`,
				body
			);
			return response;
		},
		onSuccess: () => {
			showToast(
				"Deletion Successful",
				"User was deleted successfully!",
				"Awesome!"
			);
		},
		onError: () => {
			showToast(
				"Deletion Failed",
				"Something went wrong. The user was not deleted",
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
				<h1 className="text-3xl text-center fw-bolder">
					Update Category
				</h1>
				<FormField
					control={form.control}
					name="categoryId"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>CategoryId</FormLabel>
							<FormControl>
								<Input
									placeholder="categoryId"
									{...field}
									readOnly
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="categoryName"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>CategoryName</FormLabel>
							<FormControl>
								<Input placeholder="categoryName" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="categoryDescription"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>CategoryDescription</FormLabel>
							<FormControl>
								<Input
									placeholder="categoryDescription"
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

export default UpdateCategory;
