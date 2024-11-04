/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from "@/redux/hooks/useApp";
import { useMutation } from "react-query";
import { api } from "../api";

type Methods = "post" | "put" | "patch" | "delete";

export const useMutationQuery = <T = any>(
	url: string,
	method: Methods = "post"
) => {
	const token = useAppSelector((state) => state.user.token);

	const prepareMutation = <T>(data: T) => {
		return api[method]<T>(url, data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	};

	return useMutation(prepareMutation<T>, {
		retry: false,
	});
};
