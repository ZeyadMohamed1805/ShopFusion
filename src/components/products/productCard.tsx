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
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { addCartItem } from "@/utils/cart";
import { TProductCardProps } from "@/types/types";

const ProductCard = ({ data, visible }: TProductCardProps) => {
	const { toast } = useToast();

	const showToast = (
		title: string,
		description: string,
		action: string,
		destructive: boolean = false
	) => {
		toast({
			title: title,
			description: description,
			variant: destructive ? "destructive" : "default",
			action: <ToastAction altText="Can't wait!">{action}</ToastAction>,
		});
	};

	const onCartClick = () => {
		const isItemAdded = addCartItem({ ...data, productAmount: 1 });
		isItemAdded
			? showToast(
					`${data.productName} Added!`,
					`${data.productName} Added To Cart Successfully!`,
					"Awesome!"
			  )
			: showToast(
					`${data.productName} Exists`,
					`${data.productName} is already in your cart!`,
					"Got it!",
					true
			  );
	};

	return (
		<Card
			key={data.productId}
			className={`transition transform duration-300 max-w-[688px] ${
				visible
					? "opacity-100 scale-100 block"
					: "opacity-0 scale-90 pointer-events-none hidden"
			}`}
		>
			<AspectRatio
				ratio={16 / 9}
				className="flex items-center justify-center text-center"
			>
				<h3 className="text-3xl fw-bolder">{data.productImage}</h3>
			</AspectRatio>
			<CardHeader>
				<div className="flex justify-between gap-4">
					<div className="flex flex-col gap-2">
						<CardTitle>{data.productName}</CardTitle>
						<CardDescription>
							{data.productDescription}
						</CardDescription>
					</div>
					<Button
						variant="ghost"
						className="h-12 max-h-12 w-12 max-w-12 p-0"
					>
						<ShoppingCart
							className="h-6 w-6 max-h-6 max-w-6"
							onClick={onCartClick}
						/>
					</Button>
				</div>
			</CardHeader>
			<CardContent>
				<div className="w-full flex items-center justify-between gap-4">
					<Badge variant="secondary" className="text-sm fw-semibold">
						{data.category?.categoryName || "Category"}
					</Badge>
					<p className="text-lg fw-bolder">{`$${data.productPrice}`}</p>
				</div>
			</CardContent>
			{/* <CardFooter className="flex justify-between">
				<Button
					className="w-full"
					onClick={() =>
						showToast(
							"View Details",
							"Feature will be added soon...",
							"Can't wait!"
						)
					}
				>
					View Details
				</Button>
			</CardFooter> */}
		</Card>
	);
};

export default ProductCard;
