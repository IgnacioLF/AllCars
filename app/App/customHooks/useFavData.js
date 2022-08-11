import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { userFavoritesAllAPI } from "../api/api";

export const useFavData = () => {
	const [favData, setFavData] = useState({});
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const isFocused = useIsFocused();

	useEffect(() => {
		const getFavData = async () => {
			try {
				const { favorites } = await userFavoritesAllAPI();
				setFavData(favorites);
			} catch (err) {
				console.log();
				setError(err);
			} finally {
				setIsLoading(false);
			}
		};
		if (isFocused) getFavData();
	}, [isFocused]);

	return { favData, error, isLoading };
};
