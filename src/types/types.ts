export type ChildrenType = {
	children: React.ReactNode;
};

export type TProductType = {
	ProductId: number;
	ProductImage: string;
	ProductName: string;
	ProductPrice: number;
	ProductSlug: string;
	ProductDescription: string;
	ProductQuantityInStock: number;
	CategoryId: number;
	CreatedAt: Date;
};

export type TProductCardProps = {
	data: TProductType;
	visible: boolean;
};

export type TProductFormProps = {
	setFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TProductListProps = {
	filter: string;
};

export type TCartItemType = TProductType & {
	ProductAmount: number;
};
