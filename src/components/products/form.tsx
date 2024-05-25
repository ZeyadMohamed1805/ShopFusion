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
					onChange={(event) => setFilter("name", event.target.value)}
				/>
				<div className="w-full flex items-center gap-4">
					<Input
						placeholder="Min Price"
						onChange={(event) =>
							setFilter("min", event.target.value)
						}
						type="number"
						id="min"
					/>
					<Input
						placeholder="Max Price"
						onChange={(event) =>
							setFilter("max", event.target.value)
						}
						type="number"
						id="max"
					/>
				</div>
			</div>
			<Select onValueChange={(value) => setFilter("category", value)}>
				<SelectTrigger className="w-full max-w-[180px] max-md:max-w-none">
					<SelectValue placeholder="Select Category" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{isLoading ? (
							<SelectLabel>Loading...</SelectLabel>
						) : isSuccess && data && data.data ? (
							<>
								<SelectLabel>Categories</SelectLabel>
								<SelectItem value={"All"}>All</SelectItem>
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
								<SelectItem value="All">All</SelectItem>
								<SelectItem value="1">Category One</SelectItem>
								<SelectItem value="2">Category Two</SelectItem>
								<SelectItem value="3">
									Category Three
								</SelectItem>
								<SelectItem value="4">Category Four</SelectItem>
								<SelectItem value="5">Category Five</SelectItem>
								<SelectItem value="6">Category Six</SelectItem>
							</>
						)}
					</SelectGroup>
				</SelectContent>
			</Select>
		</form>
	);
};

export default Form;
