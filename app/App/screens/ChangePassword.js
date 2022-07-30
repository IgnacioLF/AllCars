/* eslint-disable react/jsx-indent-props */
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useForm, Controller } from "react-hook-form";
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	Image,
	ActivityIndicator,
	StatusBar,
	Alert,
} from "react-native";
import colors from "../constants/colors";
import { WhiteInput } from "../components/WhiteInput";
import { PurpleButton } from "../components/PurpleButton";
import { GreyButton } from "../components/GreyButton";
import { userUpdatePasswordAPI } from "../api/api";

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
		height: 180,
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
	errorText: {
		fontSize: 20,
		color: colors.red,
		marginTop: 10,
		fontWeight: "bold",
	},
	loading: {
		marginTop: "20%",
		marginBottom: "20%",
	},
});

export default ({ navigation }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [apiError, setApiError] = useState(false);
	const { control, handleSubmit, setError, watch, reset } = useForm({
		defaultValues: {
			oldPassword: "",
			newPassword: "",
			repeatPassword: "",
		},
	});

	const pwd = watch("newPassword");

	const updatedPassword = () =>
		Alert.alert(
			"Actualización de contraseña",
			"Contraseña actualizada con éxito",
			[{ text: "OK" }]
		);

	const submit = async (data) => {
		setIsLoading(true);
		reset();
		const { oldPassword, newPassword } = data;
		try {
			await userUpdatePasswordAPI({ oldPassword, newPassword });
			updatedPassword();
			setIsLoading(false);
		} catch (errors) {
			errors.map((error) => {
				const errorHeader = error.split(":")[0].split("-")[0];
				const errorBody = error.split(":")[1];
				if (!errorHeader || !errorBody) return setApiError(true);
				switch (errorHeader) {
					case "PASSWORD":
						return setError("oldPassword", {
							type: "custom",
							message: "Contraseña erronea",
						});
					case "NEWPASSWORD":
						return setError("newPassword", {
							type: "custom",
							message: errorBody,
						});
					default:
						return setApiError(true);
				}
			});
			setIsLoading(false);
		}
	};

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
							source={require("../assets/images/resetPassword.png")}
							style={styles.icon}
							resizeMode="contain"
						/>
						{isLoading ? (
							<ActivityIndicator
								color={colors.white}
								size="large"
								style={styles.loading}
							/>
						) : (
							<>
								<Controller
									control={control}
									name="oldPassword"
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
										required: "La contraseña es requerida",
									}}
								/>
								<Controller
									control={control}
									name="newPassword"
									render={({
										field: { onChange, value },
										fieldState: { error },
									}) => (
										<WhiteInput
											value={value}
											title="Nueva contraseña"
											onChange={(val) => onChange(val)}
											error={error}
											isPassword
										/>
									)}
									rules={{
										required: "La nueva contraseña es requerida",
									}}
								/>
								<Controller
									control={control}
									name="repeatPassword"
									render={({
										field: { onChange, value },
										fieldState: { error },
									}) => (
										<WhiteInput
											value={value}
											title="Repetir contraseña"
											onChange={(val) => onChange(val)}
											error={error}
											isPassword
										/>
									)}
									rules={{
										validate: (value) =>
											value === pwd || "Las contraseñas no coinciden",
										required: "Repetir contraseña es requerida",
									}}
								/>
								<GreyButton
									title="Volver"
									onPress={() => navigation.push("ChangeProfile")}
								/>
								<PurpleButton
									title="Guardar cambios"
									onPress={handleSubmit(submit)}
								/>
							</>
						)}
						{apiError ? (
							<Text style={styles.errorText}>
								Error no se puedo establecer conexión
							</Text>
						) : null}
					</View>
				</ScrollView>
			</LinearGradient>
		</View>
	);
};
