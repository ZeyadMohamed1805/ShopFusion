import Hero from "@/components/home/hero";

const Home = () => (
	<main className="w-full min-h-[calc(100vh-200.2px)] px-4 py-8 flex justify-center">
		<div className="w-full max-w-[1400px] flex flex-col items-center">
			<Hero />
		</div>
	</main>
);

export default Home;
