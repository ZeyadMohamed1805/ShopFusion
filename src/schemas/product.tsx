import { z } from "zod";

export const productFormSchema = z.object({
	productId: z.coerce.number(),
	productName: z.string().min(1, { message: "Product name is required." }),
	productSlug: z.string().regex(new RegExp(/^[a-z0-9-]+$/), {
		message:
			"Product slug can only contain lowercase letters, numbers, and hyphens.",
	}),
	productDescription: z
		.string()
		.min(1, { message: "Product description is required." }),
	productPrice: z.coerce
		.number()
		.min(0.01, { message: "Product price must be greater than 0" }),
	productImage: z.string().url("Invalid URL format"),
	productQuantityInStock: z.coerce
		.number()
		.min(1, { message: "Product quantity must be a positive number" }),
	categoryId: z.coerce
		.number()
		.min(1, { message: "Category id is required." }),
});
