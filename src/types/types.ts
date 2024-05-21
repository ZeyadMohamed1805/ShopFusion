import { LucideProps } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { EApiMethod } from "./enums";
import { UseMutateFunction } from "react-query";
import { AxiosResponse } from "axios";

export type ChildrenType = {
	children: React.ReactNode;
};

export type TProductType = {
	productId: number;
	productImage: string;
	productName: string;
	productPrice: number;
	productSlug: string;
	productDescription: string;
	productQuantityInStock: number;
	categoryId: number;
	category?: {
		categoryId: number;
		categoryName: string;
	};
	createdAt?: Date;
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
	categoryId: number;
	categoryName?: string;
	categorySlug?: string;
	categoryDescription?: string;
	products: [
		{
			productId: number;
			productName?: string;
			productSlug?: string;
			productPrice?: number;
			productDescription?: string;
			productImage?: string;
			productQuantityInStock: number;
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

export type TFilterType = {
	name: string;
	min: number;
	max: number;
	category?: number;
};

export type TProductCardProps = {
	data: TProductType;
	visible: boolean;
};

export type TProductFormProps = {
	setFilter: (type: string, value: string) => void;
	categories: TUseReactQuery<TCategoryResponse>;
};

export type TProductListProps = {
	filter: TFilterType;
	products: TUseReactQuery<TProductResponse>;
	categories: TUseReactQuery<TCategoryResponse>;
};

export type TCartItemType = TProductType & {
	productAmount: number;
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

export type TUseReactQueryPost = {
	isLoading: boolean;
	isError: boolean;
	isSuccess: boolean;
	status: "idle" | "error" | "loading" | "success";
	error: unknown;
	data: unknown;
	mutate: UseMutateFunction<
		AxiosResponse<any, any>,
		unknown,
		unknown,
		unknown
	>;
};

export type TUseAPI = <T>(
	endpoint: string,
	method: EApiMethod,
	body?: T
) => TUseReactQuery<T>;

export type TProductResponse = {
	message: string;
	statusCode: number;
	success: boolean;
	data: {
		totalPages: number;
		totalCount: number;
		pageNumber: number;
		pageSize: number;
		items: Array<TProductType>;
	};
};

export type TCategoryResponse = {
	message: string;
	statusCode: number;
	success: boolean;
	data: Array<TCategoryType>;
};
