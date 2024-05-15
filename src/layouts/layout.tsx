"use client";

import Header from "./header";
import { ChildrenType } from "@/types/types";

const Layout = ({ children }: ChildrenType) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default Layout;
