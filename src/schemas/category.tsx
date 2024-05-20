import { z } from "zod";

export const categoryFormSchema = z.object({
	CategoryId: z.coerce.number(),
	CategoryName: z
		.string()
		.min(1, { message: "CategoryName is required." })
		.max(50, { message: "CategoryName must be less than 50 characters" })
		.regex(new RegExp(/^[a-zA-Z\s]*$/), {
			message: "CategoryName must contain only letters",
		}),
	CategoryDescription: z
		.string()
		.min(1, { message: "CategoryDescription is required" })
		.max(100, {
			message: "CategoryDescription must be less than 100 characters",
		})
		.regex(new RegExp(/^[a-zA-Z\s]*$/), {
			message: "CategoryDescription must contain only letters",
		}),
});
