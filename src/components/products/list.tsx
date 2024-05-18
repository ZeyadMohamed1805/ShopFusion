import ProductCard from "./productCard";

const List = () => {
	return (
		<div
			className="w-full grid gap-4"
			style={{
				gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
			}}
		>
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</div>
	);
};

export default List;
