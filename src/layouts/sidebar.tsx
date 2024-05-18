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
import Register from "@/components/auth/register";

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
								{button === "Login" ? <Login /> : <Register />}
							</DialogContent>
						</Dialog>
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
