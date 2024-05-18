import { z } from "zod";

export const loginFormSchema = z.object({
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
});
