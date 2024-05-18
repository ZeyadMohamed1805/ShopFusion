import Link from "next/link";
import Image from "next/image";
import Login from "@/components/auth/login";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { navLinks, navButtons } from "@/constants/constants";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import Register from "@/components/auth/register";

const Footer = () => {
	return (
		<footer className="w-full flex flex-col items-center gap-4 p-4 shadow border-t-2">
			<div className="max-w-[1400px] w-full flex items-center justify-between flex-col md:flex-row gap-4">
				<Image
					src={"/logo.svg"}
					width={160}
					height={30.24}
					priority
					alt="Logo"
				/>
				<ul className="flex items-center">
					{navLinks.map((link, index) => (
						<li
							key={index}
							className={navigationMenuTriggerStyle()}
						>
							<Link href={`/${link.toLowerCase()}`}>{link}</Link>
						</li>
					))}
				</ul>
				<ul className="flex items-center gap-2">
					{navButtons.map((button, index) => (
						<Dialog key={index}>
							<DialogTrigger asChild>
								<li>
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
								</li>
							</DialogTrigger>
							<DialogContent className="sm:max-w-[425px]">
								{button === "Login" ? <Login /> : <Register />}
							</DialogContent>
						</Dialog>
					))}
				</ul>
			</div>
			<Separator />
			<p className="text-sm fw-medium">Copyrights | Zeyad Mohamed</p>
		</footer>
	);
};

export default Footer;
