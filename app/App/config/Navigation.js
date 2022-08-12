/* eslint-disable react/jsx-indent-props */
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LoginScreen from "../screens/Login";
import Register from "../screens/Register";
import Cars from "../screens/Cars";
import CarDetails from "../screens/CarDetails";
import Favorites from "../screens/Favorites";
import Photos from "../screens/Photos";
import Account from "../screens/Account";
import colors from "../constants/colors";
import ChangePassword from "../screens/ChangePassword";

const screenGlobalOptionStyle = {
	headerShown: false,
};

const MainStack = createStackNavigator();
const AccountStack = createStackNavigator();
const CarStack = createStackNavigator();
const FavStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const FavStackScreen = () => {
	return (
		<FavStack.Navigator screenOptions={screenGlobalOptionStyle}>
			<FavStack.Screen name="Favorites" component={Favorites} />
			<FavStack.Screen name="CarDetails" component={CarDetails} />
		</FavStack.Navigator>
	);
};

const CarsStackScreen = () => {
	return (
		<CarStack.Navigator screenOptions={screenGlobalOptionStyle}>
			<CarStack.Screen name="Cars" component={Cars} />
			<CarStack.Screen name="CarDetails" component={CarDetails} />
		</CarStack.Navigator>
	);
};

const AccountStackScreen = () => {
	return (
		<AccountStack.Navigator screenOptions={screenGlobalOptionStyle}>
			<AccountStack.Screen name="ChangeProfile" component={Account} />
			<AccountStack.Screen name="ChangePassword" component={ChangePassword} />
		</AccountStack.Navigator>
	);
};

const HomeTabNavigator = () => {
	return (
		<Tab.Navigator
			activeColor={colors.white}
			screenOptions={screenGlobalOptionStyle}
		>
			<Tab.Screen
				name="CarsTab"
				component={CarsStackScreen}
				options={{
					tabBarLabel: "Coches",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="car-sports" color={color} size={26} />
					),
					tabBarColor: colors.lightPurple,
				}}
			/>
			<Tab.Screen
				name="Photos"
				component={Photos}
				options={{
					tabBarLabel: "Fotos",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="camera" color={color} size={26} />
					),
					tabBarColor: colors.middleLightPurple,
				}}
			/>
			<Tab.Screen
				name="FavoritesTab"
				component={FavStackScreen}
				options={{
					tabBarLabel: "Favoritos",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="heart" color={color} size={26} />
					),
					tabBarColor: colors.middleDarkPurple,
				}}
			/>
			<Tab.Screen
				name="Account"
				component={AccountStackScreen}
				options={{
					tabBarLabel: "Cuenta",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="account" color={color} size={26} />
					),
					tabBarColor: colors.darkPurple,
				}}
			/>
		</Tab.Navigator>
	);
};

const MainStackScreen = () => {
	return (
		<MainStack.Navigator screenOptions={screenGlobalOptionStyle}>
			<MainStack.Screen name="Login" component={LoginScreen} />
			<MainStack.Screen name="Register" component={Register} />
			<MainStack.Screen name="Home" component={HomeTabNavigator} />
		</MainStack.Navigator>
	);
};

export default () => {
	return (
		<NavigationContainer>
			<MainStackScreen />
		</NavigationContainer>
	);
};
