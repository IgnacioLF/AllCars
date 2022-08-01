/* eslint-disable react/jsx-indent-props */
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Text } from "react-native";
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
});

export default ({ navigation, route }) => {
	console.log("params", route.params);
	return (
		<View style={styles.container}>
			<LinearGradient
				colors={[colors.gradientBlackLight, colors.gradientBlackDark]}
				style={styles.background}
			>
				<Text style={styles.text}>This is Cars Details</Text>
				<Text style={styles.text}>{route.params.id}</Text>
			</LinearGradient>
		</View>
	);
};
