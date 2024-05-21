"use client";

import { ChildrenType } from "@/types/types";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@/providers/theme";

const Provider = ({ children }: ChildrenType) => {
	const queryClient = new QueryClient();

	return (
		<>
			<ThemeProvider
				attribute="class"
				defaultTheme="dark"
				enableSystem
				disableTransitionOnChange
			>
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			</ThemeProvider>
		</>
	);
};

export default Provider;
