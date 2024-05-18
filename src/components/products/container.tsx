"use client";

import { useState } from "react";
import Form from "./form";
import List from "./list";

const Container = () => {
	const [filter, setFilter] = useState("");

	const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFilter(event.target.value.toLowerCase());
	};

	return (
		<div className="w-full max-w-[1400px] flex flex-col items-center gap-8">
			<Form setFilter={handleFilterChange} />
			<List filter={filter} />
		</div>
	);
};

export default Container;
