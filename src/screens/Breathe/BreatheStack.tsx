import React from "react";

import { View } from "react-native";

import {
	createNativeStackNavigator,
	type NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import { BreatheCountdown } from "./BreatheCountdown";
import { BreatheSuccess } from "./BreatheSuccess";
import BreatheTimer from "./BreatheTimer";
import { commonStyles } from "./common.styles";
import { BreatheProvider } from "./context/BreatheProvider";

import { BackButton } from "~/components/BackButton";
import { Box } from "~/components/Box";
import { Breather } from "~/components/Breather";
import { STACK_SCREEN_OPTIONS } from "~/router/router.constants";
import { Routes } from "~/router/routes";

const Stack = createNativeStackNavigator();

const STACK_OPTIONS: NativeStackNavigationOptions = {
	...STACK_SCREEN_OPTIONS,
	contentStyle: {
		backgroundColor: "transparent",
	},
};

export function BreatheStack() {
	return (
		<BreatheProvider>
			<Box style={commonStyles.wrapper}>
				<Breather />
				<View style={commonStyles.content}>
					<Stack.Navigator
						screenOptions={STACK_OPTIONS}
						initialRouteName={Routes.BREATHE_COUNTDOWN}
					>
						<Stack.Screen
							name={Routes.BREATHE_COUNTDOWN}
							component={BreatheCountdown}
						/>
						<Stack.Screen
							name={Routes.BREATHE_TIMER}
							component={BreatheTimer}
						/>
						<Stack.Screen
							name={Routes.BREATHE_SUCCESS}
							component={BreatheSuccess}
						/>
					</Stack.Navigator>
				</View>
				<BackButton />
			</Box>
		</BreatheProvider>
	);
}
