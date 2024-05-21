import { TProductFormProps } from "@/types/types";
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

const Form = ({
	setFilter,
	categories: { isLoading, isSuccess, data },
}: TProductFormProps) => {
	return (
		<form className="w-full flex max-md:flex-col items-center justify-between gap-4">
			<div className="w-full flex items-center gap-4 max-md:flex-col">
				<Input
					id="name"
					placeholder="Product Name"
					type="text"
					onChange={setFilter}
				/>
				<div className="w-full flex items-center gap-4">
					<Input
						placeholder="Min Price"
						onChange={setFilter}
						type="number"
						id="min"
					/>
					<Input
						placeholder="Max Price"
						onChange={setFilter}
						type="number"
						id="max"
					/>
				</div>
			</div>
			<Select>
				<SelectTrigger className="w-full max-w-[180px] max-md:max-w-none">
					<SelectValue placeholder="Select Category" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{isLoading ? (
							<SelectLabel>Loading...</SelectLabel>
						) : isSuccess ? (
							<>
								<SelectLabel>Categories</SelectLabel>
								{data.data.map((category) => (
									<SelectItem
										key={category.categoryId}
										value={category.categoryId.toString()}
									>
										{category.categoryName}
									</SelectItem>
								))}
							</>
						) : (
							<>
								<SelectLabel>Categories</SelectLabel>
								<SelectItem value="Category One">
									Category One
								</SelectItem>
								<SelectItem value="Category Two">
									Category Two
								</SelectItem>
								<SelectItem value="Category Three">
									Category Three
								</SelectItem>
							</>
						)}
					</SelectGroup>
				</SelectContent>
			</Select>
		</form>
	);
};

export default Form;
