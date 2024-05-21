"use client";

import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { getLocalStorageItem } from "@/utils/storage";
import { removeCartItem, updateCartItemAmount } from "@/utils/cart";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { TCartItemType } from "@/types/types";

const List = () => {
	const [cartItems, setCartItem] = useState<TCartItemType[]>([]);
	const { push } = useRouter();
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

	useEffect(() => {
		bindCartItems();
	}, []);

	const onSelectAmount = (productId: number, amount: number) => {
		const isCartUpdated = updateCartItemAmount(productId, amount);
		if (isCartUpdated) {
			bindCartItems();
		}
	};

	const onDeleteCartItem = (productId: number) => {
		const isCartRemoved = removeCartItem(productId);
		if (isCartRemoved) {
			bindCartItems();
		}
	};

	const bindCartItems = () => {
		const cartLocalStorageItems: TCartItemType[] | null =
			getLocalStorageItem("shop-fusion-cart");
		setCartItem(cartLocalStorageItems || []);
	};

	return (
		<>
			{!cartItems.length ? (
				<div className="w-full h-full text-center flex flex-col items-center justify-center gap-4">
					<h1 className="text-3xl fw-bolder">Your Cart Is Empty.</h1>
					<Button onClick={() => push("products")}>
						Browse Products.
					</Button>
				</div>
			) : (
				<>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>{""}</TableHead>
								<TableHead>Name</TableHead>
								<TableHead>Price</TableHead>
								<TableHead>Amount</TableHead>
								<TableHead className="text-right">
									Total
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{!cartItems.length ? (
								<TableRow>
									<TableCell
										colSpan={5}
										className="text-center py-56"
									>
										<div className="flex flex-col items-center gap-2">
											<h1 className="text-3xl fw-bolder">
												Your Cart Is Empty.
											</h1>
											<Button
												onClick={() => push("products")}
											>
												Browse Products
											</Button>
										</div>
									</TableCell>
								</TableRow>
							) : (
								cartItems.map((item) => (
									<TableRow key={item.productId}>
										<TableCell className="text-right w-8">
											<AlertDialog>
												<AlertDialogTrigger asChild>
													<Button
														variant="destructive"
														className="h-8 max-h-8 w-8 max-w-8 p-0"
													>
														<Trash className="h-4 w-4 max-h-4 max-w-4" />
													</Button>
												</AlertDialogTrigger>
												<AlertDialogContent>
													<AlertDialogHeader>
														<AlertDialogTitle>
															Are you sure?
														</AlertDialogTitle>
														<AlertDialogDescription>
															The only way to add
															this item back to
															cart is by searching
															for it again.
														</AlertDialogDescription>
													</AlertDialogHeader>
													<AlertDialogFooter>
														<AlertDialogCancel>
															Cancel
														</AlertDialogCancel>
														<AlertDialogAction
															onClick={() =>
																onDeleteCartItem(
																	item.productId
																)
															}
														>
															Confirm
														</AlertDialogAction>
													</AlertDialogFooter>
												</AlertDialogContent>
											</AlertDialog>
										</TableCell>
										<TableCell className="font-medium whitespace-nowrap">
											{item.productName}
										</TableCell>
										<TableCell>
											${item.productPrice}
										</TableCell>
										<TableCell>
											<Select
												onValueChange={(value) =>
													onSelectAmount(
														item.productId,
														parseInt(value)
													)
												}
											>
												<SelectTrigger>
													<SelectValue
														placeholder={
															item.productAmount
														}
													/>
												</SelectTrigger>
												<SelectContent>
													{Array.from({
														length: item.productQuantityInStock,
													}).map((_, index) => (
														<SelectItem
															key={index}
															value={(
																index + 1
															).toString()}
														>
															{index + 1}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
										</TableCell>
										<TableCell className="text-right">
											{(
												item.productPrice *
												item.productAmount
											).toFixed(2)}
										</TableCell>
									</TableRow>
								))
							)}
						</TableBody>
						<TableFooter>
							<TableRow>
								<TableCell />
								<TableCell colSpan={3}>Total</TableCell>
								<TableCell className="text-right">
									{!cartItems.length
										? 0
										: cartItems
												.map(
													(item) =>
														item.productPrice *
														item.productAmount
												)
												.reduce((one, two) => one + two)
												.toFixed(2)}
								</TableCell>
							</TableRow>
						</TableFooter>
					</Table>
					<Separator />
					<Button
						className="w-full"
						onClick={() =>
							showToast(
								"Login required",
								"You must login to checkout you products...",
								"Got it!",
								true
							)
						}
					>
						Checkout
					</Button>
				</>
			)}
		</>
	);
};

export default List;
