/* eslint-disable react/jsx-indent-props */
import {
	View,
	StyleSheet,
	Image,
	Dimensions,
	ImageBackground,
	ScrollView,
	StatusBar,
} from "react-native";
import { BlackButton } from "../components/BlackButton";
import { PurpleButton } from "../components/PurpleButton";
import { WhiteInput } from "../components/WhiteInput";
// const screen = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
	logoContainer: {
		alignItems: "center",
		marginHorizontal: 20,
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
							<WhiteInput title="Email" />
							<WhiteInput title="Contraseña" />
						</View>
						<View style={styles.buttonsContainer}>
							<BlackButton title="ENTRAR" />
							<PurpleButton title="REGISTRARSE" />
						</View>
					</View>
				</ScrollView>
			</ImageBackground>
		</View>
	);
};
