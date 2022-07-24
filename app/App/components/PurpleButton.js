/* eslint-disable react/jsx-indent-props */
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../constants/colors";

const styles = StyleSheet.create({
	button: {
		borderRadius: 30,
		marginTop: 20,
		marginHorizontal: 20,
		borderColor: colors.borderPurple,
		borderWidth: 2,
		marginBottom: 10,
	},
	text: {
		color: colors.white,
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "center",
	},
	gradient: {
		borderRadius: 30,
		paddingVertical: 5,
		paddingHorizontal: 10,
	},
});

export const PurpleButton = ({ title, onPress }) => {
	return (
		<TouchableOpacity
			style={styles.button}
			onPress={onPress}
			activeOpacity={0.8}
		>
			<LinearGradient
				colors={[colors.lightPurple, colors.darkPurple]}
				style={styles.gradient}
				start={[0, 1]}
				end={[1, 1]}
			>
				<Text style={styles.text}>{title}</Text>
			</LinearGradient>
		</TouchableOpacity>
	);
};
