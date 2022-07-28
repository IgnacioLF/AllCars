/* eslint-disable react/jsx-indent-props */
import { useForm, Controller } from "react-hook-form";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, ScrollView, Image, StatusBar } from "react-native";
import colors from "../constants/colors";
import { WhiteInput } from "../components/WhiteInput";
import { PurpleButton } from "../components/PurpleButton";
import { GreyButton } from "../components/GreyButton";

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
	icon: {
		width: "100%",
		height: "20%",
		justifyContent: "center",
		alignSelf: "center",
		marginTop: "10%",
	},
	buttonContainer: {
		marginTop: "7%",
		marginBottom: 10,
	},
	formContainer: {
		flex: 1,
		justifyContent: "center",
	},
});

export default ({ navigation }) => {
	const { control, handleSubmit, setError, resetField } = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	const submit = async (data) => {};

	return (
		<View style={styles.container}>
			<LinearGradient
				colors={[colors.gradientBlackLight, colors.gradientBlackDark]}
				style={styles.background}
			>
				<ScrollView
					contentContainerStyle={{
						flexGrow: 1,
						justifyContent: "center",
					}}
				>
					<StatusBar
						barStyle="light-content"
						translucent
						backgroundColor="transparent"
					/>

					<View style={styles.formContainer}>
						<Image
							source={require("../assets/images/userIcon.png")}
							style={styles.icon}
							resizeMode="contain"
						/>
						<Controller
							control={control}
							name="name"
							render={({
								field: { onChange, value },
								fieldState: { error },
							}) => (
								<WhiteInput
									value={value}
									title="Nombre"
									onChange={(val) => onChange(val)}
									error={error}
								/>
							)}
							rules={{
								required: "Nombre es requerido",
							}}
						/>
						<Controller
							control={control}
							name="email"
							render={({
								field: { onChange, value },
								fieldState: { error },
							}) => (
								<WhiteInput
									value={value}
									title="Email"
									onChange={(val) => onChange(val)}
									error={error}
								/>
							)}
							rules={{
								required: "Email es requerido",
							}}
						/>
						<Controller
							control={control}
							name="password"
							render={({
								field: { onChange, value },
								fieldState: { error },
							}) => (
								<WhiteInput
									value={value}
									title="Contraseña"
									onChange={(val) => onChange(val)}
									error={error}
									isPassword
								/>
							)}
							rules={{
								required: "Contraseña es requerida",
							}}
						/>
						<View style={styles.buttonContainer}>
							<GreyButton
								title="Cambiar contraseña"
								onPress={() => navigation.push("ChangePassword")}
							/>
							<PurpleButton
								title="Guardar cambios"
								onPress={handleSubmit(submit)}
							/>
						</View>
					</View>
				</ScrollView>
			</LinearGradient>
		</View>
	);
};
