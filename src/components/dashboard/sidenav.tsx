import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { sideNavItems } from "@/constants/constants";
import { TSideNavProps } from "@/types/types";

const Sidenav = ({ setTranslate }: TSideNavProps) => {
	return (
		<div className="w-full h-screen justify-between max-w-[240px] flex flex-col px-4 py-16 items-center border-r-2 gap-8">
			<Image
				src={"/logo.svg"}
				className="hidden md:block mt-2"
				width={160}
				height={30.24}
				priority
				alt="Logo"
			/>
			<Image
				src={"/light-favicon.svg"}
				className="block md:hidden mt-2"
				width={24}
				height={24}
				priority
				alt="Logo"
			/>
			<ul className="w-full flex flex-col gap-4">
				{sideNavItems.map(({ Icon, page, translate }, index) => (
					<li
						key={index}
						onClick={() => setTranslate(translate)}
						className={
							navigationMenuTriggerStyle() +
							" min-w-full flex items-center p-4 gap-8 text-center cursor-pointer"
						}
					>
						<Icon className="w-6 h-6 max-w-6 max-h-6 md:w-8 md:h-8 md:max-w-8 md:max-h-8" />
						<span className="w-full text-left text-lg hidden md:inline-block">
							{page}
						</span>
					</li>
				))}
			</ul>
			<Button
				variant={"destructive"}
				className="w-full text-lg flex items-center gap-8 text-center cursor-pointer"
			>
				<LogOut className="w-6 h-6 max-w-6 max-h-6 md:w-8 md:h-8 md:max-w-8 md:max-h-8" />
				<span className="w-full text-left text-lg hidden md:inline-block">
					Logout
				</span>
			</Button>
		</div>
	);
};

export default Sidenav;
