"use client";

import Header from "./Header";
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
