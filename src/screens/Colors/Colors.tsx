import React, { useState } from "react";

import { StyleSheet, View } from "react-native";

import { GestureDetector } from "react-native-gesture-handler";
import Animated, {
	useAnimatedStyle,
	withTiming,
} from "react-native-reanimated";

import { ColorsInfoBox } from "./ColorsInfoBox";

import { useColorsGesture } from "./useColorsGesture";

import { Breather } from "~/components/Breather";
import { Intro } from "~/components/Intro";
import { GlobalStyles } from "~/styles";

export function Colors() {
	const [count, setCount] = useState(0);

	const { pan, color } = useColorsGesture(setCount);

	const style = useAnimatedStyle(() => ({
		backgroundColor: withTiming(color.value, {
			duration: 800,
		}),
	}));

	return (
		<GestureDetector gesture={pan}>
			<Animated.View style={[GlobalStyles.container, style]}>
				<Breather />
				<View style={styles.content}>
					<Intro />
				</View>
				<ColorsInfoBox count={count} />
			</Animated.View>
		</GestureDetector>
	);
}

const styles = StyleSheet.create({
	content: {
		...StyleSheet.absoluteFillObject,
		alignItems: "center",
		gap: 40,
		justifyContent: "center",
	},
});
