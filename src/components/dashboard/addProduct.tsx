import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productFormSchema } from "@/schemas/product";
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
import { TProductType } from "@/types/types";
import { useMutation } from "react-query";
import axios from "@/apis/config";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

const AddProduct = () => {
	const form = useForm<z.infer<typeof productFormSchema>>({
		resolver: zodResolver(productFormSchema),
		defaultValues: {
			productId: 0,
			productName: "",
			productPrice: 1,
			productDescription: "",
			productSlug: "",
			productImage: "",
			productQuantityInStock: 1,
			categoryId: 0,
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

	const { mutate } = useMutation("add_product", {
		mutationFn: async (body: any) => {
			const response = await axios.post(`/products`, body);
			return response;
		},
		onSuccess: () => {
			showToast(
				"Product Added",
				"Product was added successfully!",
				"Awesome!"
			);
		},
		onError: () => {
			showToast(
				"Product Not Added",
				"Something went wrong. The product was not added",
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
				<h1 className="text-3xl text-center fw-bolder">Add Product</h1>
				<div className="grid grid-cols-2 gap-4 w-full">
					<FormField
						control={form.control}
						name="productId"
						render={({ field }) => (
							<FormItem className="w-full hidden">
								<FormLabel>ProductName</FormLabel>
								<FormControl>
									<Input placeholder="productId" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="productName"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>ProductName</FormLabel>
								<FormControl>
									<Input
										placeholder="productName"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="productPrice"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>ProductPrice</FormLabel>
								<FormControl>
									<Input
										placeholder="productPrice"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="productQuantityInStock"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>ProductQuantityInStock</FormLabel>
								<FormControl>
									<Input
										placeholder="productQuantityInStock"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="productSlug"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>ProductSlug</FormLabel>
								<FormControl>
									<Input
										placeholder="productSlug"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="productImage"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>ProductImage</FormLabel>
								<FormControl>
									<Input
										placeholder="productImage"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="categoryId"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>CategoryId</FormLabel>
								<FormControl>
									<Input
										placeholder="categoryId"
										type="number"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="productDescription"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>ProductDescription</FormLabel>
							<FormControl>
								<Input
									placeholder="productDescription"
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

export default AddProduct;
