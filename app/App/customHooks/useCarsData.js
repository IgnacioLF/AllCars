import { useEffect, useState } from "react";
import { carAllAPI } from "../api/api";

export const useCarsData = () => {
	const [carsData, setCarsData] = useState({});
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getAllCars = async () => {
			try {
				const { cars } = await carAllAPI();
				setCarsData(cars);
			} catch (err) {
				//	console.log();
				setError(err);
			} finally {
				setIsLoading(false);
			}
		};
		getAllCars();
	}, []);

	return { carsData, error, isLoading };
};
