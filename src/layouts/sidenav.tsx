import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ListOrdered, User, Type } from "lucide-react";

const Sidenav = () => {
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
				<li
					className={
						navigationMenuTriggerStyle() +
						" min-w-full flex items-center p-4 gap-8 text-center font-bold"
					}
				>
					<ShoppingBag className="w-8 h-8 max-w-8 max-h-8" />
					<Link
						href={`/dashboard`}
						className="w-full text-left text-xl"
					>
						{"Products"}
					</Link>
				</li>
				<li
					className={
						navigationMenuTriggerStyle() +
						" min-w-full flex items-center p-4 gap-8 text-center font-bold"
					}
				>
					<ListOrdered className="w-8 h-8 max-w-8 max-h-8" />
					<Link
						href={`/dashboard`}
						className="w-full text-left text-xl"
					>
						{"Orders"}
					</Link>
				</li>
				<li
					className={
						navigationMenuTriggerStyle() +
						" min-w-full flex items-center p-4 gap-8 text-center font-bold"
					}
				>
					<Type className="w-8 h-8 max-w-8 max-h-8" />
					<Link
						href={`/dashboard`}
						className="w-full text-left text-xl"
					>
						{"Categories"}
					</Link>
				</li>
				<li
					className={
						navigationMenuTriggerStyle() +
						" min-w-full flex items-center p-4 gap-8 text-center font-bold"
					}
				>
					<User className="w-8 h-8 max-w-8 max-h-8" />
					<Link
						href={`/dashboard`}
						className="w-full text-left text-xl"
					>
						{"Users"}
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidenav;
