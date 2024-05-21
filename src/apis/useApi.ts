import { useQuery } from "react-query";
import axios from "./config";
import { TUseAPI } from "@/types/types";
import { EApiMethod } from "@/types/enums";

export const useApi: TUseAPI = <T>(
	endpoint: string,
	method: EApiMethod,
	body?: T
) => {
	const { isLoading, isError, isSuccess, status, error, data } = useQuery(
		endpoint,
		() =>
			method === EApiMethod.GET
				? axios
						.get(endpoint)
						.then((response) => response.data)
						.catch((error) => {
							throw new Error(error);
						})
				: method === EApiMethod.POST
				? axios
						.post(endpoint, body)
						.then((response) => response.data)
						.catch((error) => {
							throw new Error(error);
						})
				: method === EApiMethod.PUT
				? axios
						.put(endpoint, body)
						.then((response) => response.data)
						.catch((error) => {
							throw new Error(error);
						})
				: axios
						.delete(endpoint)
						.then((response) => response.data)
						.catch((error) => {
							throw new Error(error);
						})
	);

	return { isLoading, isError, isSuccess, status, error, data };
};

export default useApi;
