"use client";

import { useEffect, useState } from "react";
import configAxios from "@/apis/config";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const Main = () => {
	const { push } = useRouter();
	const [user, setUser] = useState<any>();

	useEffect(() => {
		axios
			.get("/api/validate")
			.then((response) => {
				if (response.status === 200) {
					if (response.data.is_admin) {
						push("/");
					} else {
						configAxios
							.get(`/users/${response.data.user_id}`)
							.then((response) => {
								console.log(response.data.data);
								setUser(response.data.data);
							})
							.catch(() => {
								push("/");
							});
					}
				}
			})
			.catch(() => {
				push("/");
			});
	}, [push]);

	return (
		<main className="w-full min-h-[calc(100vh-200.2px)] px-4 py-8 flex justify-center">
			<div className="w-full max-w-[1400px] flex flex-col items-center gap-8">
				<div className="w-full flex items-end gap-4 flex-wrap md:flex-nowrap">
					<Avatar className="w-[180px] h-[180px]">
						<AvatarImage src="/profile.png" />
						<AvatarFallback>U</AvatarFallback>
					</Avatar>
					<div className="w-full flex items-end justify-between gap-4 capitalize">
						<h1 className="text-4xl font-bold">
							{`${user?.firstName} ${user?.lastName}`}
						</h1>
						<Button>Update</Button>
					</div>
				</div>
				<Separator />
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px]">Data</TableHead>
							<TableHead className="text-right">Value</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell className="font-medium whitespace-nowrap">
								First Name
							</TableCell>
							<TableCell className="text-right capitalize">
								{user?.firstName}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium whitespace-nowrap">
								Last Name
							</TableCell>
							<TableCell className="text-right capitalize">
								{user?.lastName}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium whitespace-nowrap">
								Email
							</TableCell>
							<TableCell className="text-right">
								{user?.email}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium whitespace-nowrap">
								Mobile
							</TableCell>
							<TableCell className="text-right">
								{user?.mobile}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium whitespace-nowrap">
								Admin
							</TableCell>
							<TableCell className="text-right capitalize">
								{user?.isAdmin.toString()}
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</main>
	);
};

export default Main;
