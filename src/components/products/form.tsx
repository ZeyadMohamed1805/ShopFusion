import { Input } from "../ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const Form = () => {
	return (
		<form className="w-full flex max-md:flex-col items-center justify-between gap-4">
			<div className="w-full flex items-center gap-4">
				<Input placeholder="Product Name" type="text" />
				<Input placeholder="Product Price" type="number" />
			</div>
			<Select>
				<SelectTrigger className="w-full max-w-[180px] max-md:max-w-none">
					<SelectValue placeholder="Select Category" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Categories</SelectLabel>
						<SelectItem value="Clothes">Clothes</SelectItem>
						<SelectItem value="Toys">Toys</SelectItem>
						<SelectItem value="Electronics">Electronics</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</form>
	);
};

export default Form;
