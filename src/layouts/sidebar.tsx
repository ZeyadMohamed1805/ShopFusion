import Image from "next/image";
import Link from "next/link";
import Login from "@/components/auth/login";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetFooter,
	SheetClose,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { navLinks, navButtons } from "@/constants/constants";
import { ChildrenType } from "@/types/types";
import { useEffect, useState } from "react";
import axios from "axios";
import Register from "@/components/auth/register";
import UseMutation from "@/apis/useMutation";

const Sidebar = ({ children }: ChildrenType) => {
	const [isAuthorized, setIsAuthorized] = useState({
		loading: true,
		authorized: false,
	});

	const { isLoading, mutate } = UseMutation(
		"/users/logout",
		async () => {
			await axios.get("/api/logout");
			location.reload();
		},
		async () => {
			await axios.get("/api/logout");
			location.reload();
		}
	);

	useEffect(() => {
		axios
			.get("/api/validate")
			.then((response) => {
				if (response.status === 401) {
					setIsAuthorized({ loading: false, authorized: false });
				} else if (response.status === 200) {
					setIsAuthorized({ loading: false, authorized: true });
				}
				console.log(response.data, response.status);
			})
			.catch((error) => {});
	}, []);

	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent side={"right"} className="flex flex-col gap-4">
				<SheetHeader className="px-4">
					<Image
						src={"/logo.svg"}
						width={160}
						height={30.24}
						priority
						alt="Logo"
					/>
					<Separator />
				</SheetHeader>
				<ul className="w-100 flex flex-col gap-4">
					{navLinks.map((link, index) => (
						<li
							key={index}
							className={
								"min-w-full text-left font-bold" +
								navigationMenuTriggerStyle()
							}
						>
							<Link
								href={`/${link.toLowerCase()}`}
								className="w-full"
							>
								{link}
							</Link>
						</li>
					))}
				</ul>
				<Separator />
				<ul className="w-100 flex flex-col gap-4">
					{isAuthorized.authorized && !isAuthorized.loading ? (
						<li
							className="min-w-full text-left"
							onClick={() => mutate("")}
						>
							<Button
								className="min-w-full text-left"
								disabled={isLoading}
							>
								{isLoading ? "Loading..." : "Logout"}
							</Button>
						</li>
					) : (
						navButtons.map((button, index) => (
							<Dialog key={index}>
								<DialogTrigger asChild>
									<li
										key={index}
										className={"min-w-full text-left"}
									>
										<Button
											variant={
												button === "Login"
													? "outline"
													: "default"
											}
											className={
												button === "Login"
													? navigationMenuTriggerStyle() +
													  " min-w-full text-left"
													: "min-w-full text-left"
											}
										>
											{button}
										</Button>
									</li>
								</DialogTrigger>
								<DialogContent
									className={
										button === "Login"
											? "sm:max-w-[425px]"
											: "sm:max-w-[425px] md:max-w-[800px]"
									}
								>
									{button === "Login" ? (
										<Login />
									) : (
										<Register />
									)}
								</DialogContent>
							</Dialog>
						))
					)}
				</ul>
				<SheetFooter>
					<SheetClose asChild>Save changes</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default Sidebar;
