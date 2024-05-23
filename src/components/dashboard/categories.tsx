import * as React from "react";
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
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "../ui/label";
import { Input } from "@/components/ui/input";
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
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	dashboardCategories,
	dashboardCategories as data,
} from "@/constants/constants";
import {
	TCategoryResponse,
	TCategoryType,
	TUseReactQuery,
} from "@/types/types";
import UpdateCategory from "./updateCategory";
import { EApiMethod } from "@/types/enums";
import useApi from "@/apis/useApi";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { useMutation } from "react-query";
import axios from "@/apis/config";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import AddCategory from "./addCategory";

const Categories = () => {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] =
		React.useState<ColumnFiltersState>([]);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});
	const categories: TUseReactQuery<TCategoryResponse> =
		useApi<TCategoryResponse>("/categories", EApiMethod.GET);

	const { toast } = useToast();

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

	const { mutate } = useMutation("delete_category", {
		mutationFn: async (endpoint: string) => {
			const response = await axios.delete(endpoint);
			return response;
		},
		onSuccess: () => {
			location.reload();
		},
		onError: () => {
			showToast(
				"Deletion Failed",
				"Something went wrong. The user was not deleted",
				"Got it!",
				true
			);
		},
	});

	const columns: ColumnDef<TCategoryType>[] = [
		{
			accessorKey: "categoryName",
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
				<div className="text-left">{row.getValue("categoryName")}</div>
			),
		},
		{
			accessorKey: "categorySlug",
			header: "Slug",
			cell: ({ row }) => (
				<div className="capitalize text-left">
					{row.getValue("categorySlug")}
				</div>
			),
		},
		{
			accessorKey: "categoryDescription",
			header: "Description",
			cell: ({ row }) => (
				<div className="capitalize text-left">
					{row.getValue("categoryDescription")}
				</div>
			),
		},
		{
			id: "actions",
			enableHiding: false,
			cell: ({ row }) => {
				return (
					<>
						<AlertDialog>
							<Sheet>
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
												Update Category
											</DropdownMenuItem>
										</SheetTrigger>
										<AlertDialogTrigger asChild>
											<DropdownMenuItem>
												Delete Category
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
											This action cannot be undone. This
											will permanently delete your date
											and remove it from our servers.
										</AlertDialogDescription>
									</AlertDialogHeader>
									<AlertDialogFooter>
										<AlertDialogCancel>
											Cancel
										</AlertDialogCancel>
										<AlertDialogAction
											onClick={() =>
												mutate(
													`/categories/${
														categories.data.data[
															parseInt(row.id)
														].categoryId
													}`
												)
											}
										>
											Confirm
										</AlertDialogAction>
									</AlertDialogFooter>
								</AlertDialogContent>
								<SheetContent side={"bottom"}>
									<UpdateCategory
										category={
											!categories.isLoading &&
											categories.isSuccess
												? categories.data.data[
														parseInt(row.id)
												  ]
												: dashboardCategories[
														parseInt(row.id)
												  ]
										}
									/>
								</SheetContent>
							</Sheet>
						</AlertDialog>
					</>
				);
			},
		},
	];

	const table = useReactTable({
		data:
			!categories.isLoading && categories.isSuccess
				? categories.data.data
				: data,
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
		<div id="categories" className="w-full flex flex-col gap-8">
			<h1 className="text-3xl font-bold text-left border-b-2 pb-4">
				Categories
			</h1>
			<div className="w-full">
				<div className="flex items-center flex-wrap gap-4 py-4">
					<Input
						placeholder="Filter Categories..."
						value={
							(table
								.getColumn("categoryName")
								?.getFilterValue() as string) ?? ""
						}
						onChange={(event) =>
							table
								.getColumn("categoryName")
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
								Columns <ChevronDown className="ml-2 h-4 w-4" />
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
												column.toggleVisibility(!!value)
											}
										>
											{column.id}
										</DropdownMenuCheckboxItem>
									);
								})}
						</DropdownMenuContent>
					</DropdownMenu>
					<Dialog>
						<DialogTrigger asChild>
							<Button className="w-full lg:w-fit">Add</Button>
						</DialogTrigger>
						<DialogContent
							className={"sm:max-w-[425px] md:max-w-[800px]"}
						>
							<AddCategory />
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
											row.getIsSelected() && "selected"
										}
									>
										{row.getVisibleCells().map((cell) => (
											<TableCell
												key={cell.id}
												className="whitespace-nowrap"
											>
												{flexRender(
													cell.column.columnDef.cell,
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
	);
};

export default Categories;
