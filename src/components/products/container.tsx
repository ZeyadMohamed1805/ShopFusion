"use client";

import { useState } from "react";
import Form from "./form";
import List from "./list";
import useApi from "@/apis/useApi";
import { TCategoryResponse, TProductResponse } from "@/types/types";
import { EApiMethod } from "@/types/enums";

const Container = () => {
	const [filter, setFilter] = useState("");
	const products = useApi<TProductResponse>(
		"/products?pageNumber=1&pageSize=6",
		EApiMethod.GET
	);
	const categories = useApi<TCategoryResponse>("/categories", EApiMethod.GET);

	const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFilter(event.target.value.toLowerCase());
	};

	return (
		<div className="w-full max-w-[1400px] flex flex-col items-center gap-8">
			<Form setFilter={handleFilterChange} categories={categories} />
			<List filter={filter} products={products} />
		</div>
	);
};

export default Container;
