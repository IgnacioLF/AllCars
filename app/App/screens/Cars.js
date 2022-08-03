/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-indent-props */
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import {
	View,
	StyleSheet,
	FlatList,
	SafeAreaView,
	StatusBar,
} from "react-native";
import { carAllAPI } from "../api/api";
import { CarItem } from "../components/CarItem";
import colors from "../constants/colors";

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
		marginTop: 48,
		marginBottom: 20,
	},
	separator: {
		height: 25,
		width: "100%",
	},
});

export default ({ navigation }) => {
	// TODO isloading and no data
	const [carsData, setCarsData] = useState();
	useEffect(() => {
		const getAllCars = async () => {
			try {
				const { cars } = await carAllAPI();
				setCarsData(cars);
			} catch (error) {
				console.log();
			}
		};
		getAllCars();
	}, []);
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
				<SafeAreaView>
					<FlatList
						data={carsData}
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
								/>
							);
						}}
						style={styles.list}
						ItemSeparatorComponent={() => <View style={styles.separator} />}
					/>
				</SafeAreaView>
			</LinearGradient>
		</View>
	);
};
