"use client";

import { useEffect, useState } from "react";
import configAxios from "@/apis/config";
import axios from "axios";
import { useRouter } from "next/navigation";

const Main = () => {
	const { push } = useRouter();
	const [user, setUser] = useState();

	useEffect(() => {
		axios
			.get("/api/validate")
			.then((response) => {
				if (response.status === 200) {
					if (response.data.is_admin) {
						push("/");
					} else {
						configAxios
							.get(`/users/${response.data.user_id}`)
							.then((response) => {
								console.log(response.data.data);
								setUser(response.data.data);
							})
							.catch(() => {
								push("/");
							});
					}
				}
			})
			.catch(() => {
				push("/");
			});
	}, [push]);

	return <main>Main</main>;
};

export default Main;
