import React from "react";

import {
	TransitionPresets,
	createStackNavigator,
	type StackNavigationOptions,
} from "@react-navigation/stack";

import { Routes, type RootStackParamsList } from "./routes";

import { Breathe } from "~/screens/Breathe";
import { Colors } from "~/screens/Colors";
import { Home } from "~/screens/Home";

const Stack = createStackNavigator<RootStackParamsList>();

const STACK_SCREEN_OPTIONS: StackNavigationOptions = {
	headerShown: false,
	...TransitionPresets.ScaleFromCenterAndroid,
};

export default function RootStack() {
	return (
		<Stack.Navigator screenOptions={STACK_SCREEN_OPTIONS}>
			<Stack.Screen
				name={Routes.HOME}
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name={Routes.COLORS}
				component={Colors}
				options={{
					headerTitle: "Pick a color",
				}}
			/>
			<Stack.Screen
				name={Routes.BREATHE}
				component={Breathe}
				options={{
					headerTitle: "Breathe",
				}}
			/>
		</Stack.Navigator>
	);
}
