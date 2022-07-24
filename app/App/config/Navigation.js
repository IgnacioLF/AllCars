/* eslint-disable react/jsx-indent-props */
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/Login";

const MainStack = createStackNavigator();

const MainStackScreen = () => {
	return (
		<MainStack.Navigator>
			<MainStack.Screen
				name="Login"
				component={LoginScreen}
				options={{ headerShown: false }}
			/>
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
