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
import { Badge } from "@/components/ui/badge";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { addCartItem } from "@/utils/cart";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";

const ProductCard = ({ data }: any) => {
	const { toast } = useToast();

	const showToast = (
		title: any,
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
		const isItemAdded = addCartItem({ ...data, ProductAmount: 1 });
		isItemAdded
			? showToast(
					"Product Added!",
					"Item Added To Cart Successfully!",
					"Awesome!"
			  )
			: showToast(
					"Item Exists",
					"Item is already in your cart!",
					"Got it!",
					true
			  );
	};

	return (
		<Card id={data.ProductId}>
			<AspectRatio
				ratio={16 / 9}
				className="flex items-center justify-center text-center"
			>
				<h3 className="text-3xl fw-bolder">{data.ProductImage}</h3>
			</AspectRatio>
			<CardHeader>
				<div className="flex justify-between gap-4">
					<div className="flex flex-col gap-2">
						<CardTitle>{data.ProductName}</CardTitle>
						<CardDescription>
							{data.ProductDescription}
						</CardDescription>
					</div>
					<ShoppingCartIcon
						className={
							navigationMenuTriggerStyle() +
							" w-fit cursor-pointer"
						}
						onClick={onCartClick}
					/>
				</div>
			</CardHeader>
			<CardContent>
				<div className="w-full flex items-center justify-between gap-4">
					<Badge variant="secondary" className="text-md fw-bolder">
						Category
					</Badge>
					<p className="text-lg fw-bolder">{`$${data.ProductPrice}`}</p>
				</div>
			</CardContent>
			<CardFooter className="flex justify-between">
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
			</CardFooter>
		</Card>
	);
};

export default ProductCard;
