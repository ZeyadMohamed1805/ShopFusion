import Categories from "@/components/dashboard/categories";
import Orders from "@/components/dashboard/orders";
import Products from "@/components/dashboard/products";
import Users from "@/components/dashboard/users";
import { ShoppingBag, ListOrdered, User, Type } from "lucide-react";
import { TProductType, TSideNavItem } from "@/types/types";

export const navLinks: string[] = ["Home", "Products", "Cart"];
export const navButtons: string[] = ["Login", "Register"];
export const productItems: TProductType[] = [
	{
		ProductId: 0,
		ProductImage: "Product Image",
		ProductName: "Product One",
		ProductPrice: 149.99,
		ProductSlug: "Product Slug",
		ProductDescription: "This is the product's description",
		ProductQuantityInStock: 2,
		CategoryId: 0,
		Category: {
			CategoryId: 0,
			CategoryName: "Category One",
		},
		CreatedAt: new Date(),
	},
	{
		ProductId: 1,
		ProductImage: "Product Image",
		ProductName: "Product Two",
		ProductPrice: 349.99,
		ProductSlug: "Product Slug",
		ProductDescription: "This is the product's description",
		ProductQuantityInStock: 3,
		CategoryId: 1,
		Category: {
			CategoryId: 1,
			CategoryName: "Category Two",
		},
		CreatedAt: new Date(),
	},
	{
		ProductId: 2,
		ProductImage: "Product Image",
		ProductName: "Product Three",
		ProductPrice: 249.99,
		ProductSlug: "Product Slug",
		ProductDescription: "This is the product's description",
		ProductQuantityInStock: 5,
		CategoryId: 2,
		Category: {
			CategoryId: 2,
			CategoryName: "Category Three",
		},
		CreatedAt: new Date(),
	},
	{
		ProductId: 3,
		ProductImage: "Product Image",
		ProductName: "Product Four",
		ProductPrice: 749.99,
		ProductSlug: "Product Slug",
		ProductDescription: "This is the product's description",
		ProductQuantityInStock: 4,
		CategoryId: 3,
		Category: {
			CategoryId: 3,
			CategoryName: "Category Four",
		},
		CreatedAt: new Date(),
	},
	{
		ProductId: 4,
		ProductImage: "Product Image",
		ProductName: "Product Five",
		ProductPrice: 999.99,
		ProductSlug: "Product Slug",
		ProductDescription: "This is the product's description",
		ProductQuantityInStock: 6,
		CategoryId: 4,
		Category: {
			CategoryId: 4,
			CategoryName: "Category Five",
		},
		CreatedAt: new Date(),
	},
	{
		ProductId: 5,
		ProductImage: "Product Image",
		ProductName: "Product Six",
		ProductPrice: 49.99,
		ProductSlug: "Product Slug",
		ProductDescription: "This is the product's description",
		ProductQuantityInStock: 1,
		CategoryId: 5,
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
