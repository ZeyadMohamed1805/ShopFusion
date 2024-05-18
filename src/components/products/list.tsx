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

const List = () => {
	return (
		<div className="w-full flex flex-col gap-8">
			<div
				className="w-full grid gap-4"
				style={{
					gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
				}}
			>
				{productItems.map((item) => (
					<ProductCard key={item.id} data={item} />
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
		</div>
	);
};

export default List;
