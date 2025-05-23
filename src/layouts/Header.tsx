import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/layouts/sidebar";
import { Switch } from "@/components/ui/switch";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Login from "@/components/auth/login";
import Register from "@/components/auth/register";
import { navLinks, navButtons } from "@/constants/constants";
import axios from "axios";
import { useEffect, useState } from "react";
import UseMutation from "@/apis/useMutation";

const Header = () => {
	const [isAuthorized, setIsAuthorized] = useState({
		loading: true,
		authorized: false,
	});
	const { setTheme, theme } = useTheme();

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

	const toggleMode = (): void => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	useEffect(() => {
		axios
			.get("/api/validate")
			.then((response) => {
				if (response.status === 401) {
					setIsAuthorized({ loading: false, authorized: false });
				} else if (response.status === 200) {
					setIsAuthorized({ loading: false, authorized: true });
				}
			})
			.catch((error) => {});
	}, []);

	return (
		<header className="w-full border-b-2 shadow flex justify-center">
			<NavigationMenu className="max-w-[1400px] w-full flex items-center justify-between p-4">
				<Image
					src={"/logo.svg"}
					width={160}
					height={30.24}
					priority
					alt="Logo"
				/>
				<NavigationMenuList className="flex items-center gap-2">
					{navLinks.map((link, index) => (
						<NavigationMenuItem
							key={index}
							className="hidden md:flex"
						>
							<Link
								href={`/${link.toLowerCase()}`}
								legacyBehavior
								passHref
							>
								<NavigationMenuLink
									className={navigationMenuTriggerStyle()}
								>
									{link}
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					))}
					{isAuthorized.authorized && !isAuthorized.loading ? (
						<>
							<NavigationMenuItem className="hidden md:flex">
								<Link href={`/profile`} legacyBehavior passHref>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle()}
									>
										Profile
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem
								onClick={() => mutate("")}
								className="hidden md:flex ml-4"
							>
								<Button disabled={isLoading}>
									{isLoading ? "Loading..." : "Logout"}
								</Button>
							</NavigationMenuItem>
						</>
					) : (
						navButtons.map((button, index) => (
							<NavigationMenuItem
								key={index}
								className="hidden md:flex ml-4"
							>
								<Dialog>
									<DialogTrigger asChild>
										<Button
											variant={
												button === "Login"
													? "outline"
													: "default"
											}
											className={
												button === "Login"
													? navigationMenuTriggerStyle()
													: ""
											}
										>
											{button}
										</Button>
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
							</NavigationMenuItem>
						))
					)}
					<Switch
						id="header-mode"
						checked={theme === "light" ? false : true}
						onCheckedChange={toggleMode}
					/>
					<Sidebar>
						<Button
							variant="ghost"
							className="h-12 max-h-12 w-12 max-w-12 p-0 flex md:hidden"
						>
							<Menu className="h-6 w-6 max-h-6 max-w-6" />
						</Button>
					</Sidebar>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
};

export default Header;
