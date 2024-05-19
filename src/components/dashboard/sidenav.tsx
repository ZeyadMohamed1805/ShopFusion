import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Image from "next/image";
import { sideNavItems } from "@/constants/constants";
import { TSideNavProps } from "@/types/types";

const Sidenav = ({ setTranslate }: TSideNavProps) => {
	return (
		<div className="w-full max-w-[240px] flex flex-col p-4 justify-center items-center border-r-2 gap-40">
			<Image
				src={"/logo.svg"}
				width={160}
				height={30.24}
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
							" min-w-full flex items-center p-4 gap-8 text-center font-bold cursor-pointer"
						}
					>
						<Icon className="w-8 h-8 max-w-8 max-h-8" />
						<span className="w-full text-left text-xl">{page}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidenav;
