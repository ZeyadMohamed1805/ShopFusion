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
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";

const ProductCard = ({ data }: any) => {
	const { toast } = useToast();

	const showToast = (title: any) => {
		toast({
			title: title,
			description: "Feature coming soon...",
			action: (
				<ToastAction altText="Can't wait!">
					Can&apos;t wait!
				</ToastAction>
			),
		});
	};

	const onCartClick = () => {
		showToast(data.ProductId);
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
					onClick={() => showToast("View Details")}
				>
					View Details
				</Button>
			</CardFooter>
		</Card>
	);
};

export default ProductCard;
