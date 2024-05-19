import { LucideProps } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

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
	Category?: {
		CategoryId: number;
		CategoryName: string;
	};
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

export type TSideNavProps = {
	setTranslate: Dispatch<SetStateAction<number>>;
};

export type TSideNavItem = {
	Icon: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
	page: string;
	translate: number;
};
