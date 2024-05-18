import { z } from "zod";

export const registerFormSchema = z.object({
	FirstName: z
		.string()
		.min(4, { message: "First Name must be at least 4 characters" })
		.max(30, { message: "First Name must be at most 30 characters" }),
	LastName: z
		.string()
		.min(4, { message: "Last Name must be at least 4 characters" })
		.max(30, { message: "Last Name must be at most 30 characters" }),
	Email: z
		.string()
		.regex(new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/), {
			message: "Invalid email",
		}),
	Password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters." })
		.regex(new RegExp(/^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)).+$/), {
			message: "Invalid password",
		}),
	Mobile: z.string().regex(new RegExp(/^[0-9]{10}$/), {
		message: "Mobile number must be 10 digits",
	}),
});
