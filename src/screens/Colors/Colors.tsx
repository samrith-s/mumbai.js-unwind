import React, { useState } from "react";

import { useWindowDimensions } from "react-native";

import { GestureDetector } from "react-native-gesture-handler";
import Animated, {
	useAnimatedStyle,
	withTiming,
} from "react-native-reanimated";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ColorsInfoBox } from "./ColorsInfoBox";

import { useColorsGesture } from "./useColorsGesture";

import { Breather } from "~/components/Breather";

export function Colors() {
	const { width, height } = useWindowDimensions();
	const insets = useSafeAreaInsets();

	const [count, setCount] = useState(0);

	const { pan, color } = useColorsGesture(setCount);

	const style = useAnimatedStyle(() => ({
		backgroundColor: withTiming(color.value, {
			duration: 800,
		}),
	}));

	return (
		<GestureDetector gesture={pan}>
			<Animated.View
				style={[
					{
						width: width,
						height: height,
						paddingTop: insets.top,
						paddingBottom: insets.bottom,
					},
					style,
				]}
			>
				<Breather />
				<ColorsInfoBox count={count} />
			</Animated.View>
		</GestureDetector>
	);
}
