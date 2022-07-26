import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default () => {
	return (
		<View style={styles.container}>
			<Text>This is Cars</Text>
		</View>
	);
};
