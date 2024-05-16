import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { navLinks } from "@/constants/constants";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Footer = () => {
	return (
		<footer className="w-full flex flex-col items-center gap-4 p-4 shadow">
			<Image
				src={"/logo.svg"}
				width={160}
				height={30.24}
				priority
				alt="Logo"
			/>
			<ul>
				{navLinks.map((link, index) => (
					<li key={index} className={navigationMenuTriggerStyle()}>
						<Link href={`/${link.toLowerCase()}`}>{link}</Link>
					</li>
				))}
			</ul>
			<Separator />
			<p className="text-sm fw-medium">Copyrights | Zeyad Mohamed</p>
		</footer>
	);
};

export default Footer;
