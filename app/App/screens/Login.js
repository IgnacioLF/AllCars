/* eslint-disable react/jsx-indent-props */
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
	View,
	StyleSheet,
	Image,
	ImageBackground,
	ScrollView,
	StatusBar,
	Text,
	ActivityIndicator,
} from "react-native";
import { userLoginAPI } from "../api/api";
import { BlackButton } from "../components/BlackButton";
import { PurpleButton } from "../components/PurpleButton";
import { WhiteInput } from "../components/WhiteInput";
import colors from "../constants/colors";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
	logoContainer: {
		alignItems: "center",
		marginHorizontal: 20,
		paddingTop: 20,
	},
	backgroundImage: {
		flex: 1,
	},
	logo: {
		flexWrap: "wrap",
	},
	formContainer: {
		alignItems: "center",
		justifyContent: "flex-start",
	},
	buttonsContainer: {
		marginTop: 25,
	},
	errorText: {
		color: colors.red,
		fontSize: 20,
		marginTop: 10,
	},
});

export default ({ navigation }) => {
	const [apiError, setApiError] = useState(false);
	const [isLoading, setIsLoaging] = useState(false);
	const { control, handleSubmit } = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const submit = async (data) => {
		setApiError(false);
		setIsLoaging(true);
		const { email, password } = data;
		try {
			await userLoginAPI({ email, password });
			setIsLoaging(false);
			// TODO push to home screen
			navigation.push("Test");
		} catch (error) {
			setApiError(true);
			setIsLoaging(false);
			console.log("Login error: ", error);
		}
	};

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require("../assets/images/loginBackground.png")}
				resizeMode="cover"
				style={styles.backgroundImage}
			>
				<ScrollView
					contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
				>
					<StatusBar
						barStyle="light-content"
						translucent
						backgroundColor="transparent"
					/>
					<View style={styles.container}>
						<View style={styles.logoContainer}>
							<Image
								source={require("../assets/images/lightLogo.png")}
								style={styles.logo}
							/>
						</View>
						{isLoading ? (
							<ActivityIndicator color={colors.white} size="large" />
						) : (
							<>
								<View style={styles.formContainer}>
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
												redInput={apiError}
											/>
										)}
										rules={{
											required: "Email es requerido",
											minLength: {
												value: 4,
												message: "El email no es válido",
											},
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
												isPassword
												onChange={(val) => onChange(val)}
												error={error}
												redInput={apiError}
											/>
										)}
										rules={{
											required: "Contraseña es requerida",
											minLength: {
												value: 4,
												message: "La contraseña no es válida",
											},
										}}
									/>
									{apiError ? (
										<Text style={styles.errorText}>
											Credenciales Incorrectas
										</Text>
									) : null}
								</View>
								<View style={styles.buttonsContainer}>
									<BlackButton title="ENTRAR" onPress={handleSubmit(submit)} />
									<PurpleButton
										title="REGISTRARSE"
										onPress={() => navigation.push("Register")}
									/>
								</View>
							</>
						)}
					</View>
				</ScrollView>
			</ImageBackground>
		</View>
	);
};
