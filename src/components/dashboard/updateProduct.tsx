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

const UpdateProduct = ({ product }: { product: TProductType }) => {
	const form = useForm<z.infer<typeof productFormSchema>>({
		resolver: zodResolver(productFormSchema),
		defaultValues: {
			ProductId: product.ProductId,
			ProductName: product.ProductName,
			ProductPrice: product.ProductPrice,
			ProductDescription: product.ProductDescription,
			ProductSlug: product.ProductSlug,
			ProductImage: product.ProductImage,
			ProductQuantityInStock: product.ProductQuantityInStock,
			CategoryId: product.CategoryId,
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
					Update Product
				</h1>
				<FormField
					control={form.control}
					name="ProductId"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>ProductId</FormLabel>
							<FormControl>
								<Input
									placeholder="ProductId"
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
					name="ProductName"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>ProductName</FormLabel>
							<FormControl>
								<Input placeholder="ProductName" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="ProductPrice"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>ProductPrice</FormLabel>
							<FormControl>
								<Input placeholder="ProductPrice" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="ProductDescription"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>ProductDescription</FormLabel>
							<FormControl>
								<Input
									placeholder="ProductDescription"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="ProductSlug"
					render={({ field }) => (
						<FormItem className="w-full hidden">
							<FormLabel>ProductSlug</FormLabel>
							<FormControl>
								<Input placeholder="ProductSlug" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="ProductImage"
					render={({ field }) => (
						<FormItem className="w-full hidden">
							<FormLabel>ProductImage</FormLabel>
							<FormControl>
								<Input placeholder="ProductImage" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="CategoryId"
					render={({ field }) => (
						<FormItem className="w-full hidden">
							<FormLabel>CategoryId</FormLabel>
							<FormControl>
								<Input
									placeholder="CategoryId"
									type="number"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="ProductQuantityInStock"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>ProductQuantityInStock</FormLabel>
							<FormControl>
								<Input
									placeholder="ProductQuantityInStock"
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

export default UpdateProduct;
