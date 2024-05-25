import { z } from "zod";

export const userFormSchema = z.object({
	firstName: z
		.string()
		.min(4, { message: "First Name must be at least 4 characters" })
		.max(30, { message: "First Name must be at most 30 characters" }),
	lastName: z
		.string()
		.min(4, { message: "Last Name must be at least 4 characters" })
		.max(30, { message: "Last Name must be at most 30 characters" }),
});
