"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

const carousel = () => {
	const images = [
		"https://res.cloudinary.com/dwunqhvhr/image/upload/v1714782777/uacebaf5tpvevlh792vu.svg",
		"https://res.cloudinary.com/dwunqhvhr/image/upload/v1714782070/cnedkivwiq2xidf9doxb.svg",
		"https://res.cloudinary.com/dwunqhvhr/image/upload/v1714778211/ylu0jlxtjptdhd0pyypr.svg",
	];
	return (
		<Carousel
			className="w-full min-[1120px]:max-w-xl"
			plugins={[
				Autoplay({
					delay: 3000,
				}),
			]}
		>
			<CarouselContent>
				{images.map((image, index) => (
					<CarouselItem
						key={index}
						className="rounded overflow-hidden"
					>
						<AspectRatio ratio={3 / 2}>
							<Image
								src={image}
								fill
								alt={index.toString()}
								priority
							/>
						</AspectRatio>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};

export default carousel;
