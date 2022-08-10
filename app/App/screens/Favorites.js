/* eslint-disable react/jsx-indent-props */
import { LinearGradient } from "expo-linear-gradient";
import {
	View,
	StyleSheet,
	Image,
	StatusBar,
	SafeAreaView,
	ActivityIndicator,
	FlatList,
} from "react-native";
import colors from "../constants/colors";
import { CarItem } from "../components/CarItem";
import { useFavData } from "../customHooks/useFavData";

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
	},
	list: {
		marginTop: 20,
		marginBottom: 20,
	},
	separator: {
		height: 25,
		width: "100%",
	},
	loading: {
		height: "100%",
	},
	icon: {
		width: "100%",
		height: "18%",
		justifyContent: "center",
		alignSelf: "center",
		marginTop: "10%",
	},
});

export default ({ navigation }) => {
	const { favData, isLoading } = useFavData();

	return (
		<View style={styles.container}>
			<StatusBar
				barStyle="light-content"
				translucent
				backgroundColor="transparent"
			/>
			<LinearGradient
				colors={[colors.gradientBlackLight, colors.gradientBlackDark]}
				style={styles.background}
			>
				<Image
					source={require("../assets/images/favIcon.png")}
					style={styles.icon}
					resizeMode="contain"
				/>
				<SafeAreaView>
					{isLoading ? (
						<ActivityIndicator
							color={colors.white}
							size="large"
							style={styles.loading}
						/>
					) : (
						<FlatList
							data={favData}
							renderItem={({ item }) => {
								return (
									<CarItem
										image={item.image}
										name={item.name}
										price={item.price}
										type={item.type}
										onPress={() =>
											navigation.navigate("CarDetails", { id: item._id })
										}
										key={item.id}
									/>
								);
							}}
							style={styles.list}
							ItemSeparatorComponent={() => <View style={styles.separator} />}
						/>
					)}
				</SafeAreaView>
			</LinearGradient>
		</View>
	);
};
