import Link from "next/link";
import Image from "next/image";
import Sidebar from "./sidebar";
import { Switch } from "@/components/ui/switch";
import { MenuIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navLinks, navButtons } from "@/constants/constants";

const Header = () => {
	const { setTheme, theme } = useTheme();

	const toggleMode = (): void => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<NavigationMenu className="w-100 max-w-none shadow flex items-center justify-between p-4 border-b-2">
			<Image
				src={"/logo.svg"}
				width={160}
				height={30.24}
				priority
				alt="Logo"
			/>
			<NavigationMenuList className="flex items-center gap-2">
				{navLinks.map((link, index) => (
					<NavigationMenuItem key={index} className="hidden md:flex">
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
				{navButtons.map((button, index) => (
					<NavigationMenuItem
						key={index}
						className="hidden md:flex ml-4"
					>
						<Button
							variant={button === "Login" ? "outline" : "default"}
							className={
								button === "Login"
									? navigationMenuTriggerStyle()
									: ""
							}
						>
							{button}
						</Button>
					</NavigationMenuItem>
				))}
				<Switch
					id="header-mode"
					checked={theme === "light" ? false : true}
					onCheckedChange={toggleMode}
				/>
				<Sidebar>
					<MenuIcon
						className={
							navigationMenuTriggerStyle() +
							"flex md:hidden cursor-pointer"
						}
					/>
				</Sidebar>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default Header;
