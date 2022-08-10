import { useEffect, useState } from "react";
import { userFavoritesAllAPI } from "../api/api";

export const useFavData = () => {
	const [favData, setFavData] = useState({});
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

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
		getFavData();
	}, []);

	return { favData, error, isLoading };
};
