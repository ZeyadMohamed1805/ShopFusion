import ProductCard from "./productCard";
import { productItems } from "@/constants/constants";
import { TProductListProps } from "@/types/types";
import LoadingCard from "./loadingCard";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import config from "@/apis/config";

const List = ({ filter, products, categories }: TProductListProps) => {
	const [data, setData] = useState<typeof products.data.data>();

	useEffect(() => {
		config
			.get("/products?pageNumber=1&pageSize=12")
			.then((response: any) => {
				setData(response.data.data);
			})
			.catch(() => {});
	}, []);
	return (
		<div className="w-full flex flex-col gap-8">
			{products.isLoading && categories.isLoading ? (
				<div
					className="w-full grid gap-4 items-start transition-all"
					style={{
						gridTemplateColumns:
							"repeat(auto-fit, minmax(340px, 1fr))",
					}}
				>
					{Array.from({ length: 6 }).map((_, index) => (
						<LoadingCard key={index} />
					))}
				</div>
			) : (
				<>
					<div
						className="w-full grid gap-4 items-start transition-all"
						style={{
							gridTemplateColumns:
								"repeat(auto-fit, minmax(340px, 1fr))",
						}}
					>
						{products.isSuccess && categories.isSuccess ? (
							(data?.items || products.data.data.items).filter(
								(item) =>
									item.productName
										.toLowerCase()
										.includes(filter.name || "") &&
									item.productPrice >= filter.min &&
									item.productPrice <= filter.max &&
									(filter.category
										? item.categoryId === filter.category
										: true)
							).length ? (
								(data?.items || products.data.data.items)
									.filter(
										(item) =>
											item.productName
												.toLowerCase()
												.includes(filter.name || "") &&
											item.productPrice >= filter.min &&
											item.productPrice <= filter.max &&
											(filter.category
												? item.categoryId ===
												  filter.category
												: true)
									)
									.map((item) => (
										<ProductCard
											key={item.productId}
											data={{
												...item,
												category: {
													categoryId:
														categories.data.data.find(
															(category) =>
																category.categoryId ===
																item.categoryId
														)!.categoryId,
													categoryName:
														categories.data.data.find(
															(category) =>
																category.categoryId ===
																item.categoryId
														)!.categoryName!,
												},
											}}
										/>
									))
							) : (
								<div className="w-full min-h-[calc(100vh-200.2px)] grid place-items-center">
									<h1 className="text-3xl font-bold text-center">
										No Products Found...
									</h1>
								</div>
							)
						) : productItems.filter(
								(item) =>
									item.productName
										.toLowerCase()
										.includes(filter.name || "") &&
									item.productPrice >= filter.min &&
									item.productPrice <= filter.max &&
									(filter.category
										? item.categoryId === filter.category
										: true)
						  ).length ? (
							productItems
								.filter(
									(item) =>
										item.productName
											.toLowerCase()
											.includes(filter.name || "") &&
										item.productPrice >= filter.min &&
										item.productPrice <= filter.max &&
										(filter.category
											? item.categoryId ===
											  filter.category
											: true)
								)
								.map((item) => (
									<ProductCard
										key={item.productId}
										data={item}
									/>
								))
						) : (
							<div className="w-full min-h-[calc(100vh-200.2px)] grid place-items-center">
								<h1 className="text-3xl font-bold text-center">
									No Products Found...
								</h1>
							</div>
						)}
					</div>
					{(data || products.data) && (
						<div>
							<Pagination>
								<PaginationContent>
									<PaginationItem>
										<PaginationPrevious
											aria-disabled={
												(data?.pageNumber ||
													products.data.data
														.pageNumber) === 1
											}
											tabIndex={
												(data?.pageNumber ||
													products.data.data
														.pageNumber) === 1
													? -1
													: undefined
											}
											className={
												(data?.pageNumber ||
													products.data.data
														.pageNumber) === 1
													? "pointer-events-none cursor-default opacity-50"
													: "cursor-pointer"
											}
											onClick={() => {
												config
													.get(
														`/products?pageNumber=${
															data?.pageNumber
																? data.pageNumber -
																  1
																: products.data
																		.data
																		.pageNumber -
																  1
														}&pageSize=12`
													)
													.then((response: any) => {
														setData(
															response.data.data
														);
													});
											}}
										/>
									</PaginationItem>
									{Array.from({
										length:
											data?.totalPages ||
											products.data.data.totalPages,
									}).map((_, index) => (
										<PaginationItem
											key={index}
											className="cursor-pointer"
										>
											<PaginationLink
												isActive={
													index + 1 ===
													(data?.pageNumber ||
														products.data.data
															.pageNumber)
												}
												onClick={() => {
													config
														.get(
															`/products?pageNumber=${
																index + 1
															}&pageSize=12`
														)
														.then(
															(response: any) => {
																setData(
																	response
																		.data
																		.data
																);
															}
														);
												}}
											>
												{index + 1}
											</PaginationLink>
										</PaginationItem>
									))}
									<PaginationItem>
										<PaginationNext
											aria-disabled={
												(data?.pageNumber ||
													products.data.data
														.pageNumber) ===
												(data?.totalPages ||
													products.data.data
														.totalPages)
											}
											tabIndex={
												(data?.pageNumber ||
													products.data.data
														.pageNumber) ===
												(data?.totalPages ||
													products.data.data
														.totalPages)
													? -1
													: undefined
											}
											className={
												(data?.pageNumber ||
													products.data.data
														.pageNumber) ===
												(data?.totalPages ||
													products.data.data
														.totalPages)
													? "pointer-events-none cursor-default opacity-50"
													: "cursor-pointer"
											}
											onClick={() => {
												config
													.get(
														`/products?pageNumber=${
															data?.pageNumber
																? data.pageNumber +
																  1
																: products.data
																		.data
																		.pageNumber +
																  1
														}&pageSize=12`
													)
													.then((response: any) => {
														setData(
															response.data.data
														);
													});
											}}
										/>
									</PaginationItem>
								</PaginationContent>
							</Pagination>
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default List;
