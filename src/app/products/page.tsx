import Form from "@/components/products/form";
import List from "@/components/products/list";

const Products = () => (
	<main className="w-full min-h-[calc(100vh-200.2px)] px-4 py-8 flex justify-center">
		<div className="w-full max-w-[1400px] flex flex-col items-center">
			<Form />
			<List />
		</div>
	</main>
);

export default Products;
