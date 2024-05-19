"use client";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { useState } from "react";
import Sidenav from "./sidenav";
import CRUD from "./crud";
import { dashboardSections } from "@/constants/constants";

const Container = () => {
	const [translate, setTranslate] = useState<number>(0);

	return (
		<div className="w-full min-h-screen flex">
			<Sidenav setTranslate={setTranslate} />
			<Carousel
				opts={{
					align: "start",
					watchDrag: false,
					axis: "y",
				}}
				orientation="vertical"
				className="w-full"
			>
				<CarouselContent
					className={`max-h-screen duration-500`}
					style={{
						transform: `translate3d(0px, -${translate}vh, 0px)`,
					}}
				>
					{dashboardSections.map((Section, index) => (
						<CarouselItem
							key={index}
							className={`p-4 md:basis-1/2 min-h-screen grid place-items-center`}
						>
							<div className="p-1 w-full h-full grid place-items-center">
								<CRUD />
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
};

export default Container;
