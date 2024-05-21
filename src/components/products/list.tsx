import useApi from "@/apis/useApi";
import ProductCard from "./productCard";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { productItems } from "@/constants/constants";
import { TProductListProps, TProductResponse } from "@/types/types";
import { EApiMethod } from "@/types/enums";

const List = ({ filter }: TProductListProps) => {
	const { isLoading, isSuccess, data } = useApi<TProductResponse>(
		"/products?pageNumber=1&pageSize=6",
		EApiMethod.GET
	);

	return (
		<div className="w-full flex flex-col gap-8">
			{isLoading ? (
				<div className="w-full h-screen grid place-items-center">
					<h1 className="text-center text-4xl font-bold">
						Loading...
					</h1>
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
						{isSuccess
							? data.data.items.map((item) => (
									<ProductCard
										key={item.productId}
										data={item}
										visible={item.productName
											.toLowerCase()
											.includes(filter)}
									/>
							  ))
							: productItems.map((item) => (
									<ProductCard
										key={item.productId}
										data={item}
										visible={item.productName
											.toLowerCase()
											.includes(filter)}
									/>
							  ))}
					</div>
					<div>
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
					</div>
				</>
			)}
		</div>
	);
};

export default List;
