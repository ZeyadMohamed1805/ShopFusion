import { TCartItemType } from "@/types/types";
import { getLocalStorageItem, setLocalStorageItem } from "./storage";

export const addCartItem = (cartItem: TCartItemType): boolean => {
	const cartItems: TCartItemType[] | null =
		getLocalStorageItem<TCartItemType[]>("shop-fusion-cart");

	if (cartItems) {
		const productIndex = cartItems.findIndex(
			(item) => item.ProductId === cartItem.ProductId
		);

		if (productIndex === -1) {
			const newCartItems: TCartItemType[] = [...cartItems, cartItem];
			setLocalStorageItem<TCartItemType[]>(
				"shop-fusion-cart",
				newCartItems
			);
			return true;
		}

		return false;
	} else {
		setLocalStorageItem<TCartItemType[]>("shop-fusion-cart", [cartItem]);
		return true;
	}
};

export const updateCartItemAmount = (
	productId: number,
	amount: number
): boolean => {
	const cartItems: TCartItemType[] | null =
		getLocalStorageItem<TCartItemType[]>("shop-fusion-cart");

	if (cartItems) {
		const newCartItems: TCartItemType[] = cartItems.map((item) => {
			if (item.ProductId === productId) {
				item.ProductAmount = amount;
				return item;
			}
			return item;
		});
		setLocalStorageItem<TCartItemType[]>("shop-fusion-cart", newCartItems);
		return true;
	}

	return false;
};

export const removeCartItem = (productId: number): boolean => {
	const cartItems: TCartItemType[] | null =
		getLocalStorageItem<TCartItemType[]>("shop-fusion-cart");

	if (cartItems) {
		const productIndex: number = cartItems.findIndex(
			(item) => item.ProductId === productId
		);
		cartItems.splice(productIndex, 1);
		setLocalStorageItem<TCartItemType[]>("shop-fusion-cart", cartItems);
		return true;
	}

	return false;
};
