import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { cartItems } from "@/constants/constants";

const List = () => {
	return (
		<>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Price</TableHead>
						<TableHead>Amount</TableHead>
						<TableHead className="text-right">Total</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{cartItems.map((item) => (
						<TableRow key={item.id}>
							<TableCell className="font-medium">
								{item.name}
							</TableCell>
							<TableCell>{item.price}</TableCell>
							<TableCell>
								<Select>
									<SelectTrigger>
										<SelectValue placeholder="1" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="1">1</SelectItem>
										<SelectItem value="2">2</SelectItem>
										<SelectItem value="3">3</SelectItem>
									</SelectContent>
								</Select>
							</TableCell>
							<TableCell className="text-right">
								{item.total}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={3}>Total</TableCell>
						<TableCell className="text-right">$1,199.94</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
			<Separator />
			<Button className="w-full">Checkout</Button>
		</>
	);
};

export default List;
