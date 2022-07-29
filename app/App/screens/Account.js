/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-indent-props */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { LinearGradient } from "expo-linear-gradient";
import {
	View,
	StyleSheet,
	ScrollView,
	Image,
	StatusBar,
	ActivityIndicator,
	Text,
	Alert,
} from "react-native";
import colors from "../constants/colors";
import { WhiteInput } from "../components/WhiteInput";
import { PurpleButton } from "../components/PurpleButton";
import { GreyButton } from "../components/GreyButton";
import { RedButton } from "../components/RedButton";
import { userProfileAPI, userUpdateProfileAPI } from "../api/api";
import { removeJWT } from "../redux/User/user.actions";

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
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const [apiError, setApiError] = useState(false);
	const { control, handleSubmit, setError, resetField, reset } = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});
	const updatedProfile = () =>
		Alert.alert("Actualización de usuario", "Usuario actualizado con éxito", [
			{ text: "OK" },
		]);

	useEffect(() => {
		const getUserData = async () => {
			setIsLoading(true);
			try {
				const data = await userProfileAPI();
				reset(data);
				setIsLoading(false);
			} catch (error) {
				setApiError(true);
			}
		};
		getUserData();
	}, []);

	const submit = async (data) => {
		setIsLoading(true);
		resetField("password");
		const { name, email, password } = data;
		try {
			await userUpdateProfileAPI({ name, email, password });
			updatedProfile();
			setIsLoading(false);
		} catch (errors) {
			errors.map((error) => {
				const errorHeader = error.split(":")[0].split("-")[0];
				const errorBody = error.split(":")[1];
				if (!errorHeader || !errorBody) return setApiError(true);
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
								<GreyButton
									title="Cambiar contraseña"
									onPress={() => navigation.push("ChangePassword")}
								/>
								<PurpleButton
									title="Guardar cambios"
									onPress={handleSubmit(submit)}
								/>
								<RedButton
									title="Cerrar sesión"
									onPress={() => {
										dispatch(removeJWT());
										navigation.push("Login");
									}}
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
