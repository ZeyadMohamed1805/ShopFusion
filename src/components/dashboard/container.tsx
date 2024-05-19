"use client";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { useState } from "react";

const Container = () => {
	const [translate, setTranslate] = useState(0);

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
				{Array.from({ length: 4 }).map((_, index) => (
					<CarouselItem
						key={index}
						className={`p-4 md:basis-1/2 min-h-screen grid place-items-center`}
					>
						<div className="p-1 w-full h-full">
							<Card className="w-full h-full grid place-items-center">
								<CardContent className="w-full h-full flex items-center justify-center p-6">
									<span className="text-3xl font-semibold">
										{index + 1}
									</span>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};

export default Container;
