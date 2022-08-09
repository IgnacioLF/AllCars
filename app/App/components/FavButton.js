/* eslint-disable react/jsx-indent-props */
import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../constants/colors";
import {
	userFavoritesAddAPI,
	userFavoritesCheckAPI,
	userFavoritesRemoveAPI,
} from "../api/api";

const styles = StyleSheet.create({
	button: {
		borderRadius: 30,
		marginTop: 5,
		marginHorizontal: 20,
		marginBottom: 5,
	},
	text: {
		color: colors.white,
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "center",
	},
	gradient: {
		borderRadius: 30,
		paddingVertical: 10,
		paddingHorizontal: 10,
	},
	view: {
		backgroundColor: colors.lightBlack,
		borderRadius: 30,
		paddingVertical: 10,
		paddingHorizontal: 10,
	},
});

export const FavButton = (props) => {
	const { id } = props;
	const [Fav, setFav] = useState(false);
	useEffect(() => {
		const getIsFav = async () => {
			try {
				const { isFav } = await userFavoritesCheckAPI({ id });
				setFav(isFav);
			} catch (error) {
				console.log();
			}
		};
		getIsFav();
	}, [id]);

	const handleAddFav = async () => {
		try {
			await userFavoritesAddAPI({ id });
			setFav(true);
		} catch (error) {
			console.log();
		}
	};

	const handleRemoveFav = async () => {
		try {
			await userFavoritesRemoveAPI(id);
			setFav(false);
		} catch (error) {
			console.log();
		}
	};
	return (
		<View {...props}>
			{Fav ? (
				<TouchableOpacity
					style={styles.button}
					onPress={handleRemoveFav}
					activeOpacity={0.9}
				>
					<LinearGradient
						colors={[colors.lightPurple, colors.darkPurple]}
						style={styles.gradient}
						start={[0, 1]}
						end={[1, 1]}
					>
						<AntDesign name="heart" size={30} color="white" />
					</LinearGradient>
				</TouchableOpacity>
			) : (
				<TouchableOpacity
					style={styles.button}
					onPress={handleAddFav}
					activeOpacity={0.9}
				>
					<View style={styles.view}>
						<AntDesign name="heart" size={30} color={colors.middleDarkPurple} />
					</View>
				</TouchableOpacity>
			)}
		</View>
	);
};
