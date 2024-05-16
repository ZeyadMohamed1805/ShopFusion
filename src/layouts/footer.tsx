import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { navLinks } from "@/constants/constants";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Footer = () => {
	return (
		<footer className="w-full flex flex-col items-center gap-4">
			<ul>
				{navLinks.map((link, index) => (
					<li key={index} className={navigationMenuTriggerStyle()}>
						<Link href={`/${link.toLowerCase()}`}>{link}</Link>
					</li>
				))}
			</ul>
			<Separator />
			<p>Copyrights | Zeyad Mohamed</p>
		</footer>
	);
};

export default Footer;
