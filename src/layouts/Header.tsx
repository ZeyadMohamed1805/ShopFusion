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
	return (
		<NavigationMenu className="w-100 max-w-none shadow flex items-center justify-between p-4">
			<Image src={"/logo.svg"} width={160} height={30.24} alt="Logo" />
			<NavigationMenuList>
				<NavigationMenuItem>
					<Link href="/home" legacyBehavior passHref>
						<NavigationMenuLink
							className={navigationMenuTriggerStyle()}
						>
							Home
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/home" legacyBehavior passHref>
						<NavigationMenuLink
							className={navigationMenuTriggerStyle()}
						>
							Products
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/home" legacyBehavior passHref>
						<NavigationMenuLink
							className={navigationMenuTriggerStyle()}
						>
							Cart
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Button
						variant={"outline"}
						className={navigationMenuTriggerStyle()}
					>
						Login
					</Button>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Button>Register</Button>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default Header;
