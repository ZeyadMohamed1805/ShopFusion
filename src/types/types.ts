import { LucideProps } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { EApiMethod } from "./enums";

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

export type TOrderType = {
	OrderId: number;
	OrderDate: Date;
	OrderStatus: string;
	Payment: string;
	UserId?: number;
	User?: {
		UserId: number;
		FirstName: string;
		LastName: string;
		Email: string;
		Mobile: string;
		CreatedAt: Date;
	};
	OrderProducts?: [
		{
			Quantity?: number;
			Product?: {
				ProductId: number;
				ProductName: string;
				ProductPrice: number;
				CategoryId: number;
			};
		}
	];
};

export type TCategoryType = {
	CategoryId: number;
	CategoryName?: string;
	CategorySlug?: string;
	CategoryDescription?: string;
	Products: [
		{
			ProductId: number;
			ProductName?: string;
			ProductSlug?: string;
			ProductPrice?: number;
			ProductDescription?: string;
			ProductImage?: string;
			ProductQuantityInStock: number;
		}
	];
};

export type TUserType = {
	UserId: number;
	FirstName: string;
	LastName: string;
	Email: string;
	Mobile?: string;
	IsAdmin?: boolean;
	IsBanned?: boolean;
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

export type TUseReactQuery<T> = {
	isLoading: boolean;
	isError: boolean;
	isSuccess: boolean;
	status: "idle" | "error" | "loading" | "success";
	error: unknown;
	data: T;
};

export type TUseAPI = <T>(
	endpoint: string,
	method: EApiMethod,
	body?: T
) => TUseReactQuery<T>;
