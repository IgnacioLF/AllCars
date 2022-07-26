/* eslint-disable react/jsx-indent-props */
import {
	ImageBackground,
	ScrollView,
	View,
	StyleSheet,
	StatusBar,
	Image,
	ActivityIndicator,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import colors from "../constants/colors";
import { WhiteInput } from "../components/WhiteInput";
import { PurpleButton } from "../components/PurpleButton";

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
		marginTop: 10,
	},
});

export default ({ navigation }) => {
	const { control, handleSubmit, setError, watch } = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			repeatPassword: "",
		},
	});
	const pwd = watch("password");

	const submit = (data) => {
		// TODO apiUserRegister and push to home screen
		console.log("user register", data);
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
									minLength: {
										value: 4,
										message: "El nombre debe de tener como minimo 4 carácteres",
									},
									maxLength: {
										value: 15,
										message: "El nombre no puede contener mas de 15 carácteres",
									},
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
										onChange={(val) => onChange(val)}
										error={error}
										isPassword
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
								}}
							/>
						</View>
						<PurpleButton title="REGISTRARSE" onPress={handleSubmit(submit)} />
					</View>
				</ScrollView>
			</ImageBackground>
		</View>
	);
};
