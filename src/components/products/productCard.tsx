"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "../ui/button";
import { ShoppingCartIcon } from "lucide-react";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";

const ProductCard = () => {
	return (
		<Card>
			<AspectRatio
				ratio={16 / 9}
				className="flex items-center justify-center text-center"
			>
				<h3 className="text-3xl fw-bolder">Product Image</h3>
			</AspectRatio>
			<CardHeader>
				<div className="flex justify-between gap-4">
					<div className="flex flex-col gap-2">
						<CardTitle>Product Name</CardTitle>
						<CardDescription>
							This is the product&apos;s description
						</CardDescription>
					</div>
					<ShoppingCartIcon
						className={
							navigationMenuTriggerStyle() +
							" w-fit cursor-pointer"
						}
					/>
				</div>
			</CardHeader>
			<CardContent>
				<div className="w-full flex items-center justify-between gap-4">
					<p className="text-xl fw-bolder">Category</p>
					<p className="text-xl fw-bolder">$199.99</p>
				</div>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button className="w-full">View Details</Button>
			</CardFooter>
		</Card>
	);
};

export default ProductCard;
