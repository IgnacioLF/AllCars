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
} from "react-native";
import { BlackButton } from "../components/BlackButton";
import { PurpleButton } from "../components/PurpleButton";
import { WhiteInput } from "../components/WhiteInput";

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
});

export default () => {
	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function submit(data) {
		const { email, password } = data;
		// TODO server side validations
		// reset();
	}

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
						</View>
						<View style={styles.buttonsContainer}>
							<BlackButton title="ENTRAR" onPress={handleSubmit(submit)} />
							<PurpleButton title="REGISTRARSE" />
						</View>
					</View>
				</ScrollView>
			</ImageBackground>
		</View>
	);
};
