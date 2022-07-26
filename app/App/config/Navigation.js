/* eslint-disable react/jsx-indent-props */
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/Login";
import Test from "../screens/Test";
import Register from "../screens/Register";

const MainStack = createStackNavigator();

const MainStackScreen = () => {
	return (
		<MainStack.Navigator>
			<MainStack.Screen
				name="Register"
				component={Register}
				options={{ headerShown: false }}
			/>
			<MainStack.Screen
				name="Login"
				component={LoginScreen}
				options={{ headerShown: false }}
			/>
			<MainStack.Screen name="Tests" component={Test} />
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
