/* eslint-disable react/jsx-indent-props */
import { LinearGradient } from "expo-linear-gradient";
import {
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	ActivityIndicator,
	FlatList,
} from "react-native";
import colors from "../constants/colors";
import { baseUrl } from "../api/api";
import { usePhotos } from "../customHooks/usePhotos";

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	background: {
		height: "100%",
		width: "100%",
	},
	header: {
		height: "25%",
		width: "100%",
		borderRadius: 15,
		flexDirection: "row",
	},
	imageContainer: {
		height: "100%",
		width: "50%",
	},
	imageDay: {
		height: "100%",
		width: "100%",
	},
	imageNight: {
		height: "100%",
		width: "100%",
	},
	loading: {
		height: "80%",
	},
	list: {
		marginTop: 20,
		marginBottom: 20,
		flex: 1,
	},
	separator: {
		height: 25,
		width: "100%",
	},
	photo: {
		flex: 1,
		height: 200,
		marginHorizontal: 10,
		borderColor: colors.borderPurple,
		borderWidth: 3,
		borderRadius: 10,
	},
});

export default () => {
	const { dayTime, setDayTime, isLoading, photosData } = usePhotos();

	return (
		<View style={styles.container}>
			<LinearGradient
				colors={[colors.gradientBlackLight, colors.gradientBlackDark]}
				style={styles.background}
			>
				<View style={styles.header}>
					<TouchableOpacity
						style={styles.imageContainer}
						activeOpacity={0.8}
						onPress={() => setDayTime(true)}
					>
						<Image
							source={
								dayTime
									? require("../assets/images/dayTimeActive.png")
									: require("../assets/images/dayTimeInactive.png")
							}
							style={styles.imageDay}
							resizeMode="cover"
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.imageContainer}
						activeOpacity={0.8}
						onPress={() => setDayTime(false)}
					>
						<Image
							source={
								dayTime
									? require("../assets/images/nightTimeInactive.png")
									: require("../assets/images/nightTimeActive.png")
							}
							style={styles.imageNight}
							resizeMode="cover"
						/>
					</TouchableOpacity>
				</View>
				{isLoading ? (
					<ActivityIndicator
						color={colors.white}
						size="large"
						style={styles.loading}
					/>
				) : (
					<FlatList
						data={photosData}
						renderItem={({ item }) => {
							const imageURL = `${baseUrl}/${item.image.replace(/[/]/, "/")}`;
							return (
								<Image
									source={{
										uri: imageURL,
									}}
									resizeMode="cover"
									style={styles.photo}
								/>
							);
						}}
						style={styles.list}
						ItemSeparatorComponent={() => <View style={styles.separator} />}
					/>
				)}
			</LinearGradient>
		</View>
	);
};
