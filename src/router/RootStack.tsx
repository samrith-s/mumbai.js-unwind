import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { type RootStackParamsList, Routes } from "./routes";

import { Home } from "~/screens/Home";

const Stack = createStackNavigator<RootStackParamsList>();

export default function RootStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={Routes.HOME}
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}
