import { decode } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
	const cookieStore = cookies();

	const token = cookieStore.get("jwt");

	if (!token || !token.value) {
		return NextResponse.json(
			{
				message: "Unauthorized User",
			},
			{
				status: 401,
			}
		);
	}

	try {
		const { value } = token;
		const decodedToken: any = decode(value, { json: true, complete: true });

		return new Response(
			JSON.stringify({
				user_id: decodedToken.payload.nameid,
				is_admin: decodedToken.payload.role === "Admin",
			})
		);
	} catch (error) {}

	return NextResponse.json({ cookies: cookieStore });
}
