import Image from "next/image";
import Link from "next/link";
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
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { navLinks, navButtons } from "@/constants/constants";
import { ChildrenType } from "@/types/types";

const Sidebar = ({ children }: ChildrenType) => {
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
					{navButtons.map((button, index) => (
						<li key={index} className={"min-w-full text-left"}>
							<Button
								variant={
									button === "Login" ? "outline" : "default"
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
					))}
				</ul>
				<SheetFooter>
					<SheetClose asChild>Save changes</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default Sidebar;
