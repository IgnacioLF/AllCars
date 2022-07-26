/* eslint-disable react/jsx-indent-props */
import { useState } from "react";
import {
	ImageBackground,
	ScrollView,
	View,
	StyleSheet,
	StatusBar,
	Image,
	ActivityIndicator,
	Text,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { WhiteInput } from "../components/WhiteInput";
import { PurpleButton } from "../components/PurpleButton";
import { userLoginAPI, userRegisterAPI } from "../api/api";
import colors from "../constants/colors";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
	backgroundImage: {
		flex: 1,
	},
	logo: {
		height: "15%",
		alignItems: "flex-end",
		width: "100%",
		marginTop: 18,
	},
	formContainer: {
		marginBottom: 20,
		paddingTop: 10,
	},
	errorText: {
		color: colors.red,
		fontSize: 20,
		textAlign: "center",
		marginTop: 10,
	},
});

export default ({ navigation }) => {
	const [apiError, setApiError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const { control, handleSubmit, setError, watch, resetField } = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			repeatPassword: "",
		},
	});
	const pwd = watch("password");

	const submit = async (data) => {
		setIsLoading(true);
		const { name, email, password } = data;
		try {
			await userRegisterAPI({ name, email, password });
			setIsLoading(false);
			try {
				await userLoginAPI({ email, password });
				// TODO push to home screen
				navigation.push("Test");
			} catch (error) {
				navigation.push("Login");
			}
		} catch (errors) {
			resetField("repeatPassword");
			errors.map((error) => {
				const errorHeader = error.split(":")[0].split("-")[0];
				const errorBody = error.split(":")[1];
				switch (errorHeader) {
					case "NAME":
						return setError("name", {
							type: "custom",
							message: errorBody,
						});
					case "EMAIL":
						return setError("email", {
							type: "custom",
							message: errorBody,
						});
					case "PASSWORD":
						return setError("password", {
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
			<ImageBackground
				source={require("../assets/images/loginBackground.png")}
				style={styles.backgroundImage}
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
					<View style={styles.container}>
						<Image
							source={require("../assets/images/lightLogo.png")}
							style={styles.logo}
							resizeMode={("center", "contain")}
						/>
						{isLoading ? (
							<ActivityIndicator color={colors.white} size="large" />
						) : (
							<>
								<View style={styles.formContainer}>
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
											required: "El nombre es requerido",
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
											required: "El email es requerido",
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
									{apiError ? (
										<Text style={styles.errorText}>
											Ha ocurrido un error vuelva a intentarlo
										</Text>
									) : null}
								</View>
								<PurpleButton
									title="REGISTRARSE"
									onPress={handleSubmit(submit)}
								/>
							</>
						)}
					</View>
				</ScrollView>
			</ImageBackground>
		</View>
	);
};
