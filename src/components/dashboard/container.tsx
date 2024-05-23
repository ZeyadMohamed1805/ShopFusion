"use client";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { useEffect, useState } from "react";
import Sidenav from "./sidenav";
import { dashboardSections } from "@/constants/constants";
import axios from "axios";
import { useRouter } from "next/navigation";

const Container = () => {
	const [translate, setTranslate] = useState<number>(0);
	const { push } = useRouter();
	useEffect(() => {
		axios
			.get("/api/validate")
			.then((response) => {
				if (response.status === 200) {
					if (!response.data.is_admin) {
						push("/");
					}
				}
			})
			.catch((error) => {
				push("/");
			});
	}, [push]);

	return (
		<div className="w-full min-h-screen flex overflow-x-hidden">
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
					className={`max-h-screen duration-500 py-20`}
					style={{
						transform: `translate3d(0px, -${translate}vh, 0px)`,
					}}
				>
					{dashboardSections.map((Section, index) => (
						<CarouselItem
							id={index.toString()}
							key={index}
							className={`px-4 md:basis-1/2 min-h-screen grid place-items-center`}
						>
							<div className="w-full h-full overflow-x-scroll">
								<Section />
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
};

export default Container;
