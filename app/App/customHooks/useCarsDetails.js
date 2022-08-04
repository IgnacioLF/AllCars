import { useEffect, useState } from "react";
import { carCarAPI } from "../api/api";

export const useCarsDetails = (carID) => {
	const [car, setCar] = useState();
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getCar = async () => {
			try {
				const carData = await carCarAPI({ id: carID });
				setCar(carData);
			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		};
		getCar();
	}, [carID]);

	return { car, error, isLoading };
};
