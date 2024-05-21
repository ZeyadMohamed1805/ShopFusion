import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { AspectRatio } from "../ui/aspect-ratio";

const LoadingCard = () => {
	return (
		<>
			<Card
				className={`transition transform duration-750 max-w-[688px] animate-pulse rounded`}
			>
				<AspectRatio
					ratio={16 / 9}
					className="flex items-center justify-center text-center bg-slate-200 rounded"
				>
					<h3 className="text-3xl fw-bolder">{""}</h3>
				</AspectRatio>
				<CardHeader>
					<div className="flex justify-between gap-4">
						<div className="flex flex-col gap-2 w-full">
							<CardTitle className="bg-slate-200 w-24 rounded h-8">
								{""}
							</CardTitle>
							<CardDescription className="bg-slate-200 w-full h-8 rounded">
								{""}
							</CardDescription>
						</div>
						<Button
							variant={"ghost"}
							className="h-12 max-h-12 w-12 max-w-12 p-0 cursor-default"
						>
							<ShoppingCart className="h-6 w-6 max-h-6 max-w-6" />
						</Button>
					</div>
				</CardHeader>
				<CardContent>
					<div className="w-full flex items-center justify-between gap-4 rounded">
						<Badge
							variant="secondary"
							className="text-sm fw-semibold bg-slate-200 h-8 w-24 rounded"
						>
							{""}
						</Badge>
						<p className="text-lg fw-bolder bg-slate-200 w-24 h-8 rounded">{``}</p>
					</div>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button className="w-full bg-slate-200">{""}</Button>
				</CardFooter>
			</Card>
		</>
	);
};

export default LoadingCard;
