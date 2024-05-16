import Link from "next/link";
import Image from "next/image";
import Sidebar from "./sidebar";
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
	return (
		<NavigationMenu className="w-100 max-w-none shadow flex items-center justify-between p-4">
			<Image
				src={"/logo.svg"}
				width={160}
				height={30.24}
				priority
				alt="Logo"
			/>
			<NavigationMenuList>
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
					<NavigationMenuItem key={index} className="hidden md:flex">
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
				<Sidebar>
					<Image
						src={"/menu.svg"}
						width={36}
						height={36}
						alt="Menu"
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
