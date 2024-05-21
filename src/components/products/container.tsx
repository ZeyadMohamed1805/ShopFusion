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
		"/proucts?pageNumber=1&pageSize=6",
		EApiMethod.GET
	);
	const categories = useApi<TCategoryResponse>("/caegories", EApiMethod.GET);

	const handleFilterChange = (type: string, value: string) => {
		console.log(value);

		setFilter((previous) => ({
			name: type === "name" ? value.toLowerCase() || "" : previous.name,
			min: type === "min" ? parseFloat(value) || 1 : previous.min,
			max: type === "max" ? parseFloat(value) || Infinity : previous.max,
			category:
				type === "category"
					? parseInt(value) || undefined
					: previous?.category,
		}));
	};

	return (
		<div className="w-full max-w-[1400px] flex flex-col items-center gap-8">
			<Form setFilter={handleFilterChange} categories={categories} />
			<List filter={filter} products={products} categories={categories} />
		</div>
	);
};

export default Container;
