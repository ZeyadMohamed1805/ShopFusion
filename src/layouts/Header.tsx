import Link from "next/link";
import Image from "next/image";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
	return (
		<NavigationMenu className="w-100 max-w-none shadow-md flex items-center justify-between p-4">
			<Image src={"/logo.svg"} width={240} height={45.36} alt="Logo" />
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
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default Header;
