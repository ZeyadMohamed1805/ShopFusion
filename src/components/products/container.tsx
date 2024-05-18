"use client";

import Form from "./form";
import List from "./list";

const Container = () => {
	return (
		<div className="w-full max-w-[1400px] flex flex-col items-center gap-8">
			<Form />
			<List />
		</div>
	);
};

export default Container;
