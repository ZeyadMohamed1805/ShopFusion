"use client";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Categories from "./categories";
import Orders from "./orders";
import Products from "./products";
import Users from "./users";
import { useState } from "react";

const Container = () => {
	const [translate, setTranslate] = useState(0);
	const sections = [Products, Orders, Categories, Users];

	return (
		<Carousel
			opts={{
				align: "start",
				watchDrag: false,
				axis: "y",
			}}
			orientation="vertical"
			className="w-full"
			onClick={() => {
				console.log(translate);
				setTranslate((previous) =>
					previous <= 200 ? previous + 100 : 0
				);
			}}
		>
			<CarouselContent
				className={`max-h-screen duration-500`}
				style={{ transform: `translate3d(0px, -${translate}vh, 0px)` }}
			>
				{sections.map((Section, index) => (
					<CarouselItem
						key={index}
						className={`p-4 md:basis-1/2 min-h-screen grid place-items-center`}
					>
						<div className="p-1 w-full h-full">
							<Section />
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};

export default Container;
