"use client";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { TProductResponse, TUseReactQuery } from "@/types/types";
import UpdateProduct from "./updateProduct";
import useApi from "@/apis/useApi";
import { EApiMethod } from "@/types/enums";
import { useMutation } from "react-query";
import axios from "@/apis/config";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import AddProduct from "./addProduct";
import { Dialog } from "@radix-ui/react-dialog";
import { useState, useEffect } from "react";
import { DialogContent, DialogTrigger } from "../ui/dialog";
import config from "@/apis/config";

const Products = () => {
	const products: TUseReactQuery<TProductResponse> = useApi<TProductResponse>(
		"/products?pageNumber=1&pageSize=100",
		EApiMethod.GET
	);
	const [open, setOpen] = useState(false);
	const [sheetOpen, setSheetOpen] = useState(false);
	const [temp, setTemp] = useState<TProductResponse>();
	const [sorting, setSorting] = useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
		{}
	);
	const [rowSelection, setRowSelection] = useState({});
	const { toast } = useToast();

	useEffect(() => {
		config.get("/products?pageNumber=1&pageSize=100").then((response) => {
			setTemp(response.data);
		});
	}, []);
	const showToast = (
		title: string,
		description: string,
		action: string,
		destructive: boolean = false
	) => {
		toast({
			title: title,
			description: description,
			variant: destructive ? "destructive" : "default",
			action: <ToastAction altText="Can't wait!">{action}</ToastAction>,
		});
	};

	const { mutate } = useMutation("delete_product", {
		mutationFn: async (endpoint: string) => {
			const response = await axios.delete(endpoint);
			return response;
		},
		onSuccess: () => {
			config
				.get("/products?pageNumber=1&pageSize=100")
				.then((response) => {
					setTemp(response.data);
					showToast(
						"Product Deleted",
						"Product was deleted successfully!",
						"Awesome!"
					);
				});
		},
		onError: () => {
			showToast(
				"Deletion Failed",
				"Something went wrong. The product was not deleted",
				"Got it!",
				true
			);
		},
	});

	const columns: ColumnDef<unknown, any>[] = [
		{
			accessorKey: "productName",
			header: ({ column }) => {
				return (
					<Button
						variant="ghost"
						onClick={() =>
							column.toggleSorting(column.getIsSorted() === "asc")
						}
					>
						Name
						<ArrowUpDown className="ml-2 h-4 w-4" />
					</Button>
				);
			},
			cell: ({ row }) => (
				<div className="text-left">{row.getValue("productName")}</div>
			),
		},
		{
			accessorKey: "productDescription",
			header: "Description",
			cell: ({ row }) => (
				<div className="capitalize text-left">
					{row.getValue("productDescription")}
				</div>
			),
		},
		{
			accessorKey: "productImage",
			header: "Image",
			cell: ({ row }) => (
				<div className="capitalize text-left">
					{row.getValue("productImage")}
				</div>
			),
		},
		{
			accessorKey: "productSlug",
			header: "Slug",
			cell: ({ row }) => (
				<div className="capitalize text-left">
					{row.getValue("productSlug")}
				</div>
			),
		},
		{
			accessorKey: "productQuantityInStock",
			header: "Quantity",
			cell: ({ row }) => (
				<div className="capitalize text-left">
					{row.getValue("productQuantityInStock")}
				</div>
			),
		},
		{
			accessorKey: "productPrice",
			header: () => <div className="text-left">Price</div>,
			cell: ({ row }) => {
				const productPrice = parseFloat(row.getValue("productPrice"));

				const formatted = new Intl.NumberFormat("en-US", {
					style: "currency",
					currency: "USD",
				}).format(productPrice);

				return <div className="text-left font-medium">{formatted}</div>;
			},
		},
		{
			id: "actions",
			enableHiding: false,
			cell: ({ row }) => {
				return (
					<>
						<Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant="ghost"
										className="h-8 w-8 p-0"
									>
										<span className="sr-only">
											Open menu
										</span>
										<MoreHorizontal className="h-4 w-4" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuLabel>
										Actions
									</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<SheetTrigger asChild>
										<DropdownMenuItem>
											Update product
										</DropdownMenuItem>
									</SheetTrigger>
									<AlertDialogTrigger asChild>
										<DropdownMenuItem>
											Delete Product
										</DropdownMenuItem>
									</AlertDialogTrigger>
								</DropdownMenuContent>
							</DropdownMenu>
							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>
										Are you sure?
									</AlertDialogTitle>
									<AlertDialogDescription>
										This action cannot be undone. This will
										permanently delete your date and remove
										it from our servers.
									</AlertDialogDescription>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogCancel>
										Cancel
									</AlertDialogCancel>
									<AlertDialogAction
										onClick={() =>
											mutate(
												`/products/${
													temp?.data.items[
														parseInt(row.id)
													].productId ||
													products.data.data.items[
														parseInt(row.id)
													].productId
												}`
											)
										}
									>
										Confirm
									</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
							<SheetContent side={"bottom"}>
								{!products.isLoading && products.isSuccess && (
									<UpdateProduct
										setTemp={setTemp}
										setOpen={setSheetOpen}
										product={
											temp?.data.items[
												parseInt(row.id)
											] ||
											products.data.data.items[
												parseInt(row.id)
											]
										}
									/>
								)}
							</SheetContent>
						</Sheet>
					</>
				);
			},
		},
	];

	const table = useReactTable<any>({
		data:
			!products.isLoading && products.isSuccess
				? temp?.data.items || products.data.data.items
				: [],
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});
	return (
		<AlertDialog>
			<div id="products" className="w-full flex flex-col gap-4">
				<h1 className="text-3xl font-bold text-left border-b-2 pb-4">
					Products
				</h1>
				<div className="w-full">
					<div className="flex items-center flex-wrap gap-4 py-4">
						<Input
							placeholder="Filter Products..."
							value={
								(table
									.getColumn("productName")
									?.getFilterValue() as string) ?? ""
							}
							onChange={(event) =>
								table
									.getColumn("productName")
									?.setFilterValue(event.target.value)
							}
							className="max-w-none w-full lg:max-w-sm"
						/>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="outline"
									className="ml-auto flex items-center justify-between w-full lg:w-fit"
								>
									Columns{" "}
									<ChevronDown className="ml-2 h-4 w-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								{table
									.getAllColumns()
									.filter((column) => column.getCanHide())
									.map((column) => {
										return (
											<DropdownMenuCheckboxItem
												key={column.id}
												className="capitalize"
												checked={column.getIsVisible()}
												onCheckedChange={(value) =>
													column.toggleVisibility(
														!!value
													)
												}
											>
												{column.id}
											</DropdownMenuCheckboxItem>
										);
									})}
							</DropdownMenuContent>
						</DropdownMenu>
						<Dialog open={open} onOpenChange={setOpen}>
							<DialogTrigger asChild>
								<Button className="w-full lg:w-fit">Add</Button>
							</DialogTrigger>
							<DialogContent
								className={"sm:max-w-[425px] md:max-w-[800px]"}
							>
								<AddProduct
									setTemp={setTemp}
									setOpen={setOpen}
								/>
							</DialogContent>
						</Dialog>
					</div>
					<div className="rounded-md border max-h-[calc(100vh-320px)] overflow-y-scroll">
						<Table>
							<TableHeader>
								{table.getHeaderGroups().map((headerGroup) => (
									<TableRow key={headerGroup.id}>
										{headerGroup.headers.map((header) => {
											return (
												<TableHead key={header.id}>
													{header.isPlaceholder
														? null
														: flexRender(
																header.column
																	.columnDef
																	.header,
																header.getContext()
														  )}
												</TableHead>
											);
										})}
									</TableRow>
								))}
							</TableHeader>
							<TableBody>
								{table.getRowModel().rows?.length ? (
									table.getRowModel().rows.map((row) => (
										<TableRow
											key={row.id}
											data-state={
												row.getIsSelected() &&
												"selected"
											}
										>
											{row
												.getVisibleCells()
												.map((cell) => (
													<TableCell
														key={cell.id}
														className="whitespace-nowrap"
													>
														{flexRender(
															cell.column
																.columnDef.cell,
															cell.getContext()
														)}
													</TableCell>
												))}
										</TableRow>
									))
								) : (
									<TableRow>
										<TableCell
											colSpan={columns.length}
											className="h-24 text-center"
										>
											No results.
										</TableCell>
									</TableRow>
								)}
							</TableBody>
						</Table>
					</div>
				</div>
			</div>
		</AlertDialog>
	);
};

export default Products;
