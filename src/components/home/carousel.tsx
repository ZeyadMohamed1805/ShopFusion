"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const carousel = () => {
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
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index}>
						<div className="p-1">
							<Card>
								<CardContent className="flex aspect-video min-[1120px]:aspect-square items-center justify-center p-6">
									<span className="text-4xl font-semibold">
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

export default carousel;
