import { TUseReactQueryPost } from "@/types/types";
import axios from "./config";
import { useMutation } from "react-query";

const UseMutation = (
	endpoint: string,
	successFn?: Function,
	errorFn?: Function
): TUseReactQueryPost => {
	const { mutate, isLoading, isSuccess, isError, data, error, status } =
		useMutation({
			mutationKey: endpoint,
			mutationFn: async (body: unknown) => {
				const response = await axios.post(endpoint, body);
				return response;
			},
			onSuccess: () => successFn && successFn(),
			onError: () => errorFn && errorFn(),
		});

	return { isLoading, isSuccess, isError, data, error, status, mutate };
};

export default UseMutation;
