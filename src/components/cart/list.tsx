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
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { getLocalStorageItem } from "@/utils/storage";

const List = () => {
	const [cartItems, setCartItem] = useState<any[]>([]);

	useEffect(() => {
		const cartLocalStorageItems: any[] | null =
			getLocalStorageItem("shop-fusion-cart");
		setCartItem(cartLocalStorageItems || []);
	}, []);

	return (
		<>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Price</TableHead>
						<TableHead>Amount</TableHead>
						<TableHead className="text-right">Total</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{cartItems.map((item) => (
						<TableRow key={item.ProductId}>
							<TableCell className="font-medium">
								{item.ProductName}
							</TableCell>
							<TableCell>${item.ProductPrice}</TableCell>
							<TableCell>
								<Select>
									<SelectTrigger>
										<SelectValue placeholder="1" />
									</SelectTrigger>
									<SelectContent>
										{Array.from({
											length: item.ProductQuantityInStock,
										}).map((_, index) => (
											<SelectItem
												key={index}
												value={(index + 1).toString()}
											>
												{index + 1}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</TableCell>
							<TableCell className="text-right">
								{item.ProductPrice * item.ProductAmount}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={3}>Total</TableCell>
						<TableCell className="text-right">
							{!cartItems.length
								? "Loading..."
								: cartItems
										.map((item) => item.ProductPrice)
										.reduce((one, two) => one + two)}
						</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
			<Separator />
			<Button className="w-full">Checkout</Button>
		</>
	);
};

export default List;
