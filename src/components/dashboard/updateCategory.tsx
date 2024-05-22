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

const UpdateCategory = ({ category }: { category: TCategoryType }) => {
	const form = useForm<z.infer<typeof categoryFormSchema>>({
		resolver: zodResolver(categoryFormSchema),
		defaultValues: {
			categoryId: category.categoryId,
			categoryName: category.categoryName,
			categoryDescription: category.categoryDescription,
		},
	});

	const onSubmit = (values: any) => {
		console.log(values);
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
