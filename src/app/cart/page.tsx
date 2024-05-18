import List from "@/components/cart/list";

const Cart = () => (
	<main className="w-full min-h-[calc(100vh-200.2px)] px-4 py-8 flex justify-center">
		<div className="w-full max-w-[1400px] flex flex-col items-center gap-8">
			<List />
		</div>
	</main>
);

export default Cart;
