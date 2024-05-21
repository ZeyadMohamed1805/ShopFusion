"use client";

import { useState } from "react";
import Form from "./form";
import List from "./list";
import useApi from "@/apis/useApi";
import {
	TCategoryResponse,
	TFilterType,
	TProductResponse,
} from "@/types/types";
import { EApiMethod } from "@/types/enums";

const Container = () => {
	const [filter, setFilter] = useState<TFilterType>({
		name: "",
		min: 1,
		max: Infinity,
	});
	const products = useApi<TProductResponse>(
		"/products?pageNumber=1&pageSize=6",
		EApiMethod.GET
	);
	const categories = useApi<TCategoryResponse>("/categories", EApiMethod.GET);

	const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const input = event.currentTarget.id;
		console.log(input);

		setFilter((previous) => ({
			name:
				input === "name"
					? event.target.value.toLowerCase() || ""
					: previous.name,
			min:
				input === "min"
					? parseInt(event.target.value) || 0
					: previous.min,
			max:
				input === "max"
					? parseInt(event.target.value) || Infinity
					: previous.max,
			category:
				input === "category"
					? parseInt(event.target.value)
					: previous?.category,
		}));
	};

	return (
		<div className="w-full max-w-[1400px] flex flex-col items-center gap-8">
			<Form setFilter={handleFilterChange} categories={categories} />
			<List filter={filter} products={products} />
		</div>
	);
};

export default Container;
