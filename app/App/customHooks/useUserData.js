/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { userProfileAPI } from "../api/api";

export const useUserData = (reset) => {
	const [apiError, setApiError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getUserData = async () => {
			try {
				const data = await userProfileAPI();
				reset(data);
			} catch (err) {
				setApiError(true);
			} finally {
				setIsLoading(false);
			}
		};
		getUserData();
	}, []);

	return { apiError, isLoading, setIsLoading, setApiError };
};
