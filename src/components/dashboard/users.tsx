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
import { useState, useEffect } from "react";
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
import { TUserType } from "@/types/types";
import useApi from "@/apis/useApi";
import { EApiMethod } from "@/types/enums";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { useMutation } from "react-query";
import axios from "@/apis/config";
import config from "@/apis/config";

const Users = () => {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
		{}
	);
	const [rowSelection, setRowSelection] = useState({});
	const [temp, setTemp] = useState<any>();
	const users: any = useApi<any>("/users", EApiMethod.GET);
	const { toast } = useToast();

	useEffect(() => {
		config.get("/users").then((response) => {
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

	const { mutate: deleteMutate } = useMutation("delete_user", {
		mutationFn: async (endpoint: string) => {
			const response = await axios.delete(endpoint);
			return response;
		},
		onSuccess: () => {
			config.get("/users").then((response) => {
				setTemp(response.data);
				showToast(
					"User Deleted",
					"User was deleted successfully.",
					"Awesome!"
				);
			});
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

	const { mutate: blockMutate } = useMutation("block_user", {
		mutationFn: async (endpoint: string) => {
			const response = await axios.put(endpoint, {
				...users.data.data.find(
					(user: any) =>
						user.userId === parseInt(endpoint.split("/")[1])
				),
				isBanned: true,
			});
			return response;
		},
		onSuccess: () => {
			config.get("/users").then((response) => {
				setTemp(response.data);
				showToast(
					"User Blocked",
					"The user was blocked successfully.",
					"Awesome!"
				);
			});
		},
		onError: () => {
			showToast(
				"Block Failed",
				"Something went wrong. The user was not blocked",
				"Got it!",
				true
			);
		},
	});

	const columns: ColumnDef<TUserType>[] = [
		{
			accessorKey: "email",
			header: ({ column }) => {
				return (
					<Button
						variant="ghost"
						onClick={() =>
							column.toggleSorting(column.getIsSorted() === "asc")
						}
					>
						Email
						<ArrowUpDown className="ml-2 h-4 w-4" />
					</Button>
				);
			},
			cell: ({ row }) => (
				<div className="text-left">{row.getValue("email")}</div>
			),
		},
		{
			accessorKey: "firstName",
			header: "First Name",
			cell: ({ row }) => (
				<div className="capitalize text-left">
					{row.getValue("firstName")}
				</div>
			),
		},
		{
			accessorKey: "lastName",
			header: "Last Name",
			cell: ({ row }) => (
				<div className="capitalize text-left">
					{row.getValue("lastName")}
				</div>
			),
		},
		{
			accessorKey: "mobile",
			header: "Mobile",
			cell: ({ row }) => (
				<div className="capitalize text-left">
					{row.getValue("mobile")}
				</div>
			),
		},
		{
			accessorKey: "isAdmin",
			header: "Admin",
			cell: ({ row }) => (
				<div className="capitalize text-left">
					{row.getValue("isAdmin")?.toString() || "False"}
				</div>
			),
		},
		{
			accessorKey: "isBanned",
			header: "Banned",
			cell: ({ row }) => (
				<div className="capitalize text-left">
					{row.getValue("isBanned")?.toString() || "False"}
				</div>
			),
		},
		{
			id: "actions",
			enableHiding: false,
			cell: ({ row }) => {
				return (
					<>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" className="h-8 w-8 p-0">
									<span className="sr-only">Open menu</span>
									<MoreHorizontal className="h-4 w-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuLabel>Actions</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem
									onClick={() =>
										blockMutate(
											`users/${
												temp?.data[parseInt(row.id)]
													.userId ||
												users.data.data[
													parseInt(row.id)
												].userId
											}`,
											temp?.data[parseInt(row.id)]
												.userId ||
												users.data.data[
													parseInt(row.id)
												]
										)
									}
								>
									Block User
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() =>
										deleteMutate(
											`/users/${
												temp.data[parseInt(row.id)]
													.userId ||
												users.data.data[
													parseInt(row.id)
												].userId
											}`,
											temp.data[parseInt(row.id)]
												.userId ||
												users.data.data[
													parseInt(row.id)
												]
										)
									}
								>
									Delete User
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</>
				);
			},
		},
	];

	const table = useReactTable({
		data:
			!users.isLoading && users.isSuccess
				? temp?.data || users.data.data
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
		<div id="users" className="w-full flex flex-col gap-4">
			<h1 className="text-3xl font-bold text-left border-b-2 pb-4">
				Users
			</h1>
			<div className="w-full">
				<div className="flex items-center flex-wrap gap-4 py-4">
					<Input
						placeholder="Filter Users..."
						value={
							(table
								.getColumn("email")
								?.getFilterValue() as string) ?? ""
						}
						onChange={(event) =>
							table
								.getColumn("email")
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

export default Users;
