"use client";

import { ChildrenType } from "@/types/types";
import { ThemeProvider } from "./theme";

const Provider = ({ children }: ChildrenType) => {
	return (
		<>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				{children}
			</ThemeProvider>
		</>
	);
};

export default Provider;
