import React from "react";

import {
	createNativeStackNavigator,
	type NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import { Routes, type RootStackParamsList } from "./routes";

import { Breathe } from "~/screens/Breathe";
import { Colors } from "~/screens/Colors";
import { Home } from "~/screens/Home";

const Stack = createNativeStackNavigator<RootStackParamsList>();

const STACK_SCREEN_OPTIONS: NativeStackNavigationOptions = {
	headerShown: false,
	animation: "fade",
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
