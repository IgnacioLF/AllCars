/* eslint-disable react/jsx-indent-props */
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
	button: {
		borderRadius: 30,
		backgroundColor: colors.lightBlack,
		paddingVertical: 5,
		paddingHorizontal: 10,
		marginTop: 20,
		marginHorizontal: 20,
		borderColor: colors.borderPurple,
		borderWidth: 2,
	},
	text: {
		color: colors.white,
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "center",
	},
});

export const BlackButton = ({ title, onPress }) => {
	return (
		<TouchableOpacity
			style={styles.button}
			onPress={onPress}
			activeOpacity={0.8}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};
