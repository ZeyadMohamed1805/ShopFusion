import { z } from "zod";

export const productFormSchema = z.object({
	ProductId: z.number(),
	ProductName: z.string().min(1, { message: "ProductName is required." }),
	ProductSlug: z.string().regex(new RegExp(/^[a-z0-9-]+$/), {
		message:
			"Product slug can only contain lowercase letters, numbers, and hyphens.",
	}),
	ProductDescription: z
		.string()
		.min(1, { message: "ProductDescription is required." }),
	ProductPrice: z
		.number()
		.min(0.01, { message: "Product price must be greater than 0" }),
	ProductImage: z.string().url("Invalid URL format"),
	ProductQuantityInStock: z
		.number()
		.min(1, { message: "Product quantity must be a positive number" }),
	CategoryId: z.number().min(1, { message: "CategoryId is required." }),
});
