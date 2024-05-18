import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const ProductCard = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Create project</CardTitle>
				<CardDescription>
					Deploy your new project in one-click.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">Name</div>
						<div className="flex flex-col space-y-1.5">
							Description
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-between">View</CardFooter>
		</Card>
	);
};

export default ProductCard;
