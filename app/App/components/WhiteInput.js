import { View, Text, TextInput, StyleSheet } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
	container: { width: "100%", paddingHorizontal: 20, marginTop: 8 },
	title: { fontSize: 30, color: colors.white, paddingLeft: 8, marginBottom: 5 },
	input: {
		backgroundColor: colors.white,
		borderRadius: 8,
		padding: 8,
		paddingLeft: 10,
		fontSize: 20,
		borderColor: colors.lightBlack,
		borderWidth: 2,
	},
});

export const WhiteInput = ({ title }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<TextInput style={styles.input} />
		</View>
	);
};
