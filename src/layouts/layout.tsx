"use client";

import Header from "./Header";
import Footer from "./footer";
import { Toaster } from "@/components/ui/toaster";
import { ChildrenType } from "@/types/types";

const Layout = ({ children }: ChildrenType) => {
	return (
		<>
			<Header />
			{children}
			<Toaster />
			<Footer />
		</>
	);
};

export default Layout;
