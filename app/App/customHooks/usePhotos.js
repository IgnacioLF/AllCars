import { useEffect, useState } from "react";
import { photoAlldayAPI, photoAllnightAPI } from "../api/api";

export const usePhotos = () => {
	const [dayTime, setDayTime] = useState(true);
	const [isLoading, setIsLoading] = useState(true);
	const [photosData, setPhotosData] = useState();

	useEffect(() => {
		setIsLoading(true);
		const getPhotoData = async () => {
			try {
				const { photos } = dayTime
					? await photoAlldayAPI()
					: await photoAllnightAPI();
				setPhotosData(photos);
			} catch (err) {
				console.log();
			} finally {
				setIsLoading(false);
			}
		};

		getPhotoData();
	}, [dayTime]);

	return { dayTime, setDayTime, isLoading, photosData };
};
