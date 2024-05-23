"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./footer";
import { Toaster } from "@/components/ui/toaster";
import { ChildrenType } from "@/types/types";

const Layout = ({ children }: ChildrenType) => {
	const pathname = usePathname();
	return (
		<>
			{pathname.includes("dashboard") ? (
				<>
					{children}
					<Toaster />
				</>
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
