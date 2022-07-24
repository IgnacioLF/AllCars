/* eslint-disable react/jsx-indent-props */
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
	errorText: {
		fontSize: 18,
		color: colors.red,
		marginLeft: 8,
		marginTop: 5,
	},
	inputError: {
		borderColor: colors.red,
	},
});

export const WhiteInput = ({ title, isPassword, onChange, value, error }) => {
	const inputStyles = [styles.input];
	if (error) inputStyles.push(styles.inputError);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<TextInput
				style={inputStyles}
				secureTextEntry={isPassword}
				onChangeText={onChange}
				value={value}
			/>
			{error ? <Text style={styles.errorText}>{error.message}</Text> : null}
		</View>
	);
};
