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
};

export type TCartItemType = TProductType & {
	ProductAmount: number;
};
