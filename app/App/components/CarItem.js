/* eslint-disable react/jsx-indent-props */
import {
	View,
	StyleSheet,
	Image,
	Text,
	TouchableOpacity,
	StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../constants/colors";
import { baseUrl } from "../api/api";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 100,
		marginHorizontal: 10,
	},
	gradient: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		borderColor: colors.borderPurple,
		borderWidth: 2,
		borderRadius: 10,
	},
	image: {
		width: "35%",
		height: "100%",
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
	},
	details: {
		justifyContent: "center",
		marginLeft: 5,
	},
	name: {
		fontWeight: "bold",
		fontSize: 14,
	},
	type: {
		fontSize: 12,
	},
	price: {
		fontWeight: "bold",
		color: colors.white,
		padding: 10,
		fontSize: 14,
	},
	containerPrice: {
		alignItems: "flex-end",
		flex: 1,
	},
});

export const CarItem = ({ image, name, type, price, onPress }) => {
	const imageURL = `${baseUrl}/${image.replace(/[/]/, "/")}`;

	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<StatusBar
				barStyle="dark-content"
				translucent
				backgroundColor="transparent"
			/>
			<LinearGradient
				colors={[colors.lightGrey, colors.darkGrey]}
				style={styles.gradient}
				start={[0, 1]}
				end={[1, 1]}
			>
				<Image
					source={{
						uri: imageURL,
					}}
					style={styles.image}
					resizeMode="cover"
				/>
				<View style={styles.details}>
					<Text style={styles.name}>{name}</Text>
					<Text style={styles.type}>{type}</Text>
				</View>
				<View style={styles.containerPrice}>
					<Text style={styles.price}>{`${price}€`}</Text>
				</View>
			</LinearGradient>
		</TouchableOpacity>
	);
};
