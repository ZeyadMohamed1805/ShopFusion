import ProductCard from "./productCard";
import { productItems } from "@/constants/constants";
import { TProductListProps } from "@/types/types";
import LoadingCard from "./loadingCard";
// import {
// 	Pagination,
// 	PaginationContent,
// 	PaginationEllipsis,
// 	PaginationItem,
// 	PaginationLink,
// 	PaginationNext,
// 	PaginationPrevious,
// } from "@/components/ui/pagination";

const List = ({ filter, products, categories }: TProductListProps) => {
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
							products.data.data.items.filter(
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
								products.data.data.items
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
					{/* <div>
						<Pagination>
							<PaginationContent>
								<PaginationItem className="cursor-pointer">
									<PaginationPrevious />
								</PaginationItem>
								<PaginationItem className="cursor-pointer">
									<PaginationLink>1</PaginationLink>
								</PaginationItem>
								<PaginationItem className="cursor-pointer">
									<PaginationLink isActive>2</PaginationLink>
								</PaginationItem>
								<PaginationItem className="cursor-pointer">
									<PaginationLink>3</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationEllipsis />
								</PaginationItem>
								<PaginationItem className="cursor-pointer">
									<PaginationNext />
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					</div> */}
				</>
			)}
		</div>
	);
};

export default List;
