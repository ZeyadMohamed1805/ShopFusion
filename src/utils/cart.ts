import { getLocalStorageItem, setLocalStorageItem } from "./storage";

export const addCartItem = (product: any): boolean => {
	const cartItems: any[] | null = getLocalStorageItem("shop-fusion-cart");

	if (cartItems) {
		const productIndex = cartItems.findIndex(
			(item) => item.ProductId === product.ProductId
		);

		if (productIndex === -1) {
			const newCartItems = [...cartItems, product];
			setLocalStorageItem("shop-fusion-cart", newCartItems);
			return true;
		}

		return false;
	} else {
		setLocalStorageItem("shop-fusion-cart", [product]);
		return true;
	}
};

export const updateCartItemAmount = (
	productId: number,
	amount: number
): boolean => {
	const cartItems: any[] | null = getLocalStorageItem("shop-fusion-cart");

	if (cartItems) {
		const newCartItems = cartItems.map((item) => {
			if (item.ProductId === productId) {
				item.ProductAmount = amount;
				return item;
			}
			return item;
		});
		setLocalStorageItem("shop-fusion-cart", newCartItems);
		return true;
	}

	return false;
};

export const removeCartItem = (productId: number): boolean => {
	const cartItems: any[] | null = getLocalStorageItem("shop-fusion-cart");

	if (cartItems) {
		const productIndex: number = cartItems.findIndex(
			(item) => item.ProductId === productId
		);
		cartItems.splice(productIndex, 1);
		setLocalStorageItem("shop-fusion-cart", cartItems);
		return true;
	}

	return false;
};
