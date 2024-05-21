import Categories from "@/components/dashboard/categories";
import Orders from "@/components/dashboard/orders";
import Products from "@/components/dashboard/products";
import Users from "@/components/dashboard/users";
import { ShoppingBag, ListOrdered, User, Type } from "lucide-react";
import {
	TCategoryType,
	TOrderType,
	TProductType,
	TSideNavItem,
	TUserType,
} from "@/types/types";

export const navLinks: string[] = ["Home", "Products", "Cart"];
export const navButtons: string[] = ["Login", "Register"];
export const productItems: TProductType[] = [
	{
		productId: 0,
		productImage: "https://url.com",
		productName: "Product One",
		productPrice: 149.99,
		productSlug: "product",
		productDescription: "This is the product's description",
		productQuantityInStock: 2,
		categoryId: 0,
		Category: {
			CategoryId: 0,
			CategoryName: "Category One",
		},
		CreatedAt: new Date(),
	},
	{
		productId: 1,
		productImage: "https://url.com",
		productName: "Product Two",
		productPrice: 349.99,
		productSlug: "product",
		productDescription: "This is the product's description",
		productQuantityInStock: 3,
		categoryId: 1,
		Category: {
			CategoryId: 1,
			CategoryName: "Category Two",
		},
		CreatedAt: new Date(),
	},
	{
		productId: 2,
		productImage: "https://url.com",
		productName: "Product Three",
		productPrice: 249.99,
		productSlug: "product",
		productDescription: "This is the product's description",
		productQuantityInStock: 5,
		categoryId: 2,
		Category: {
			CategoryId: 2,
			CategoryName: "Category Three",
		},
		CreatedAt: new Date(),
	},
	{
		productId: 3,
		productImage: "https://url.com",
		productName: "Product Four",
		productPrice: 749.99,
		productSlug: "product",
		productDescription: "This is the product's description",
		productQuantityInStock: 4,
		categoryId: 3,
		Category: {
			CategoryId: 3,
			CategoryName: "Category Four",
		},
		CreatedAt: new Date(),
	},
	{
		productId: 4,
		productImage: "https://url.com",
		productName: "Product Five",
		productPrice: 999.99,
		productSlug: "product",
		productDescription: "This is the product's description",
		productQuantityInStock: 6,
		categoryId: 4,
		Category: {
			CategoryId: 4,
			CategoryName: "Category Five",
		},
		CreatedAt: new Date(),
	},
	{
		productId: 5,
		productImage: "https://url.com",
		productName: "Product Six",
		productPrice: 49.99,
		productSlug: "product",
		productDescription: "This is the product's description",
		productQuantityInStock: 1,
		categoryId: 5,
		Category: {
			CategoryId: 5,
			CategoryName: "Category Six",
		},
		CreatedAt: new Date(),
	},
];

export const dashboardSections: Array<() => JSX.Element> = [
	Products,
	Orders,
	Categories,
	Users,
];

export const sideNavItems: TSideNavItem[] = [
	{ Icon: ShoppingBag, page: "Products", translate: 0 },
	{ Icon: ListOrdered, page: "Orders", translate: 100 },
	{ Icon: Type, page: "Categories", translate: 200 },
	{ Icon: User, page: "Users", translate: 300 },
];

export const dashboardOrders: TOrderType[] = [
	{
		OrderId: 0,
		OrderDate: new Date(),
		OrderStatus: "Order Status",
		Payment: "Cash",
		UserId: 0,
		User: {
			UserId: 0,
			Email: "User Email",
			FirstName: "User First Name",
			LastName: "User Last Name",
			Mobile: "User Mobile",
			CreatedAt: new Date(),
		},
		OrderProducts: [{}],
	},
	{
		OrderId: 1,
		OrderDate: new Date(),
		OrderStatus: "Order Status",
		Payment: "Cash",
		UserId: 1,
		User: {
			UserId: 1,
			Email: "User Email",
			FirstName: "User First Name",
			LastName: "User Last Name",
			Mobile: "User Mobile",
			CreatedAt: new Date(),
		},
		OrderProducts: [{}],
	},
	{
		OrderId: 2,
		OrderDate: new Date(),
		OrderStatus: "Order Status",
		Payment: "Cash",
		UserId: 2,
		User: {
			UserId: 2,
			Email: "User Email",
			FirstName: "User First Name",
			LastName: "User Last Name",
			Mobile: "User Mobile",
			CreatedAt: new Date(),
		},
		OrderProducts: [{}],
	},
	{
		OrderId: 3,
		OrderDate: new Date(),
		OrderStatus: "Order Status",
		Payment: "Cash",
		UserId: 3,
		User: {
			UserId: 3,
			Email: "User Email",
			FirstName: "User First Name",
			LastName: "User Last Name",
			Mobile: "User Mobile",
			CreatedAt: new Date(),
		},
		OrderProducts: [{}],
	},
	{
		OrderId: 4,
		OrderDate: new Date(),
		OrderStatus: "Order Status",
		Payment: "Cash",
		UserId: 4,
		User: {
			UserId: 4,
			Email: "User Email",
			FirstName: "User First Name",
			LastName: "User Last Name",
			Mobile: "User Mobile",
			CreatedAt: new Date(),
		},
		OrderProducts: [{}],
	},
];

export const dashboardCategories: TCategoryType[] = [
	{
		CategoryId: 0,
		CategoryName: "Category One",
		CategorySlug: "Category Slug",
		CategoryDescription: "Category Description",
		Products: [{ ProductId: 0, ProductQuantityInStock: 5 }],
	},
	{
		CategoryId: 1,
		CategoryName: "Category Two",
		CategorySlug: "Category Slug",
		CategoryDescription: "Category Description",
		Products: [{ ProductId: 1, ProductQuantityInStock: 5 }],
	},
	{
		CategoryId: 2,
		CategoryName: "Category Three",
		CategorySlug: "Category Slug",
		CategoryDescription: "Category Description",
		Products: [{ ProductId: 2, ProductQuantityInStock: 5 }],
	},
	{
		CategoryId: 3,
		CategoryName: "Category Four",
		CategorySlug: "Category Slug",
		CategoryDescription: "Category Description",
		Products: [{ ProductId: 3, ProductQuantityInStock: 5 }],
	},
	{
		CategoryId: 4,
		CategoryName: "Category Five",
		CategorySlug: "Category Slug",
		CategoryDescription: "Category Description",
		Products: [{ ProductId: 4, ProductQuantityInStock: 5 }],
	},
];

export const dashboardUsers: TUserType[] = [
	{
		UserId: 1,
		Email: "Email One",
		FirstName: "First Name One",
		LastName: "Last Name One",
		Mobile: "Mobile One",
		IsAdmin: false,
		IsBanned: true,
	},
	{
		UserId: 2,
		Email: "Email Two",
		FirstName: "First Name Two",
		LastName: "Last Name Two",
		Mobile: "Mobile Two",
		IsAdmin: false,
		IsBanned: false,
	},
	{
		UserId: 3,
		Email: "Email Three",
		FirstName: "First Name Three",
		LastName: "Last Name Three",
		Mobile: "Mobile Three",
		IsAdmin: true,
		IsBanned: true,
	},
	{
		UserId: 4,
		Email: "Email Four",
		FirstName: "First Name Four",
		LastName: "Last Name Four",
		Mobile: "Mobile Four",
		IsAdmin: false,
		IsBanned: false,
	},
	{
		UserId: 5,
		Email: "Email Five",
		FirstName: "First Name Five",
		LastName: "Last Name Five",
		Mobile: "Mobile Five",
		IsAdmin: false,
		IsBanned: false,
	},
];
