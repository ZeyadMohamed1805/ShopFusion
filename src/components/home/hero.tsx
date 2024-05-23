"use client";

import Carousel from "./carousel";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Hero = () => {
	const { push } = useRouter();
	return (
		<div className="w-full h-full flex items-center justify-between gap-4 flex-wrap-reverse">
			<div className="flex flex-col gap-4">
				<h1 className="text-5xl fw-bolder max-w-[480px]">
					Discover Your Next Favorite Thing
				</h1>
				<p className="text-gray-400 text-md max-w-[400px]">
					Explore a curated collection of unique and trending products
					from around the world. Shop with confidence and ease.
				</p>
				<Button onClick={() => push("products")} className={"w-fit"}>
					Start Shopping Now
				</Button>
			</div>
			<Carousel />
		</div>
	);
};

export default Hero;
