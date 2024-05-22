import { z } from "zod";

export const categoryFormSchema = z.object({
	categoryId: z.coerce.number(),
	categoryName: z
		.string()
		.min(1, { message: "Category name is required." })
		.max(50, { message: "Category name must be less than 50 characters" })
		.regex(new RegExp(/^[a-zA-Z\s]*$/), {
			message: "Category name must contain only letters",
		}),
	categorySlug: z
		.string()
		.min(1, { message: "Category slug is required." })
		.regex(new RegExp(/^[a-z0-9-]+$/), {
			message:
				"Category slug can only contain lowercase letters, numbers, and hyphens.",
		}),
	categoryDescription: z
		.string()
		.min(1, { message: "Category description is required" })
		.max(100, {
			message: "Category description must be less than 100 characters",
		})
		.regex(new RegExp(/^[a-zA-Z\s]*$/), {
			message: "Category description must contain only letters",
		}),
});
