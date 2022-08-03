/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-indent-props */
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	ActivityIndicator,
	Image,
	ScrollView,
} from "react-native";
import { carCarAPI, baseUrl } from "../api/api";
import colors from "../constants/colors";

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	text: {
		color: colors.white,
		fontSize: 20,
	},
	background: {
		height: "100%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		width: "100%",
		height: "35%",
	},
	dataContainer: {
		width: "100%",
		height: "100%",
	},
	header: {
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		marginBottom: 15,
		paddingTop: 20,
		borderTopColor: colors.borderPurple,
		borderTopWidth: 2,
	},
	titleContainer: {
		marginLeft: 10,
	},
	tittle: {
		color: colors.black,
		fontSize: 25,
		fontWeight: "bold",
	},
	type: {
		color: colors.black,
		fontSize: 17,
	},
	price: {
		color: colors.white,
		fontWeight: "bold",
		fontSize: 22,
		marginRight: 10,
	},
	description: {
		color: colors.black,
		fontSize: 17,
		marginHorizontal: 18,
		textAlign: "justify",
		marginBottom: 20,
	},
	descTittle: {
		color: colors.middleDarkPurple,
		textAlign: "center",
		fontSize: 25,
		marginBottom: 5,
	},
});

export default ({ route }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [car, setCar] = useState();
	const id = route.params.id;
	useEffect(() => {
		setIsLoading(true);
		const getCar = async () => {
			try {
				const carData = await carCarAPI({ id });
				setCar(carData);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
			}
		};
		getCar();
	}, []);

	// TODO add fav button
	return (
		<View style={styles.container}>
			<LinearGradient
				colors={[colors.lightGrey, colors.darkGrey]}
				start={[0, 1]}
				end={[1, 1]}
				style={styles.background}
			>
				{isLoading || !car ? (
					<ActivityIndicator color={colors.white} size="large" />
				) : (
					<View style={styles.dataContainer}>
						<Image
							source={{
								uri: `${baseUrl}/${car.image.replace(/[/]/, "/")}`,
							}}
							style={styles.image}
							resizeMode="cover"
						/>
						<View style={styles.header}>
							<View style={styles.titleContainer}>
								<Text style={styles.tittle}>{car.name}</Text>
								<Text style={styles.type}>{car.type}</Text>
							</View>
							<Text style={styles.price}>{`${car.price}€`}</Text>
						</View>
						<Text style={styles.descTittle}>Descripción</Text>
						<ScrollView>
							<Text style={styles.description}>{car.description}</Text>
						</ScrollView>
					</View>
				)}
			</LinearGradient>
		</View>
	);
};
