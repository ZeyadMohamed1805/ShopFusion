"use client";

import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
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
