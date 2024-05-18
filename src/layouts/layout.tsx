"use client";

import { usePathname } from "next/navigation";
import Sidenav from "./sidenav";
import Header from "./Header";
import Footer from "./footer";
import { Toaster } from "@/components/ui/toaster";
import { ChildrenType } from "@/types/types";

const Layout = ({ children }: ChildrenType) => {
	const pathname = usePathname();
	return (
		<>
			{pathname.includes("dashboard") ? (
				<div className="w-full min-h-screen flex">
					<Sidenav />
					{children}
				</div>
			) : (
				<>
					<Header />
					{children}
					<Toaster />
					<Footer />
				</>
			)}
		</>
	);
};

export default Layout;
