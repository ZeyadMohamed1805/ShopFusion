"use client";

import Header from "./header";
import Footer from "./footer";
import { ChildrenType } from "@/types/types";

const Layout = ({ children }: ChildrenType) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
