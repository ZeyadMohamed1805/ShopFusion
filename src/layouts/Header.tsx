import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
	const navLinks: string[] = ["Home", "Products", "Cart"];
	const navButtons: string[] = ["Login", "Register"];

	return (
		<NavigationMenu className="w-100 max-w-none shadow flex items-center justify-between p-4">
			<Image src={"/logo.svg"} width={160} height={30.24} alt="Logo" />
			<NavigationMenuList>
				{navLinks.map((link, index) => (
					<NavigationMenuItem key={index}>
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
					<NavigationMenuItem key={index}>
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
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default Header;
