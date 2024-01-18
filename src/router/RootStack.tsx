import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { STACK_SCREEN_OPTIONS } from "./router.constants";
import { Routes, type RootStackParamsList } from "./routes";

import { Breathe } from "~/screens/Breathe";
import { Colors } from "~/screens/Colors";
import { Home } from "~/screens/Home";
import { List } from "~/screens/List";

const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function RootStack() {
	return (
		<Stack.Navigator
			screenOptions={STACK_SCREEN_OPTIONS}
			initialRouteName={Routes.HOME}
		>
			<Stack.Screen
				name={Routes.HOME}
				component={Home}
			/>
			<Stack.Screen
				name={Routes.COLORS}
				component={Colors}
			/>
			<Stack.Screen
				name={Routes.BREATHE}
				component={Breathe}
			/>
			<Stack.Screen
				name={Routes.LIST}
				component={List}
				options={{
					animation: "slide_from_bottom",
					presentation: "modal",
				}}
			/>
		</Stack.Navigator>
	);
}
