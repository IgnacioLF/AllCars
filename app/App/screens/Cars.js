/* eslint-disable react/jsx-indent-props */
import { LinearGradient } from "expo-linear-gradient";
import {
	View,
	StyleSheet,
	FlatList,
	SafeAreaView,
	StatusBar,
	ActivityIndicator,
} from "react-native";
import { CarItem } from "../components/CarItem";
import colors from "../constants/colors";
import { useCarsData } from "../customHooks/useCarsData";

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
	loading: {
		height: "100%",
	},
});

export default ({ navigation }) => {
	const { carsData, isLoading } = useCarsData();

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
					{isLoading ? (
						<ActivityIndicator
							color={colors.white}
							size="large"
							style={styles.loading}
						/>
					) : (
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
