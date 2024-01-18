import React, { useEffect } from "react";

import Animated, { FadeIn } from "react-native-reanimated";

import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import { formatSecondsToCounter } from "./Breathe.utils";
import { commonStyles } from "./common.styles";

import { Box } from "~/components/Box";
import { Text } from "~/components/Text";

export type BreatheSuccessProps = {
	time: number;
};

export function BreatheSuccess({ time }: BreatheSuccessProps) {
	const navigation = useNavigation();

	useEffect(() => {
		const timeout = setTimeout(() => {
			navigation.goBack();
		}, 3000);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	useEffect(() => {}, []);

	return (
		<Box style={commonStyles.center}>
			<Feather
				name="check"
				size={200}
				color="white"
			/>

			<Animated.View
				layout={FadeIn}
				sharedTransitionTag="timer"
			>
				<Text style={commonStyles.largeText}>
					{formatSecondsToCounter(time)}
				</Text>
			</Animated.View>
		</Box>
	);
}
