import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/layouts/layout";
import Provider from "@/providers/provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ShopFusion | Online Shopping",
	description: "Online E-Commerce Web Application",
	icons: {
		icon: "/favicon.svg",
	},
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
	<html lang="en">
		<body className={inter.className}>
			<Provider>
				<Layout>{children}</Layout>
			</Provider>
		</body>
	</html>
);

export default RootLayout;
