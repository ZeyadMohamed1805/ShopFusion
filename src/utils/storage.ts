export const getLocalStorageItem = <T>(key: string): T | null => {
	const jsonItem = localStorage.getItem(key);
	if (jsonItem) {
		const parsedItem: T = JSON.parse(jsonItem);
		return parsedItem;
	}
	return null;
};

export const setLocalStorageItem = <T>(key: string, value: T): void => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorageItem = (key: string): void => {
	localStorage.removeItem(key);
};
