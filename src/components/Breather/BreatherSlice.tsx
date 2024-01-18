import React, { useEffect } from "react";

import { StyleSheet, type LayoutRectangle } from "react-native";

import Animated, {
	Easing,
	useAnimatedStyle,
	useSharedValue,
	withDelay,
	withRepeat,
	withTiming,
} from "react-native-reanimated";

import { Box } from "../Box";

const SHRINK_OFFSET = 100;

export type BreatherSliceProps = {
	animate?: boolean;
	layout: LayoutRectangle;
	index: number;
};

export function BreatherSlice({ layout, index, animate }: BreatherSliceProps) {
	const scale = useSharedValue(1);

	const height = layout.height - SHRINK_OFFSET * index;

	useEffect(() => {
		if (animate) {
			scale.value = withDelay(
				index * 100,
				withRepeat(
					withTiming(2, {
						duration: 3000,
						easing: Easing.in(Easing.elastic(0.2)),
					}),
					-1,
					true
				)
			);
		} else {
			scale.value = withTiming(1, {
				duration: 1000,
				easing: Easing.in(Easing.elastic(0.2)),
			});
		}
	}, [animate, index]);

	const style = useAnimatedStyle(
		() => ({
			transform: [
				{
					scale: scale.value,
				},
			],
		}),
		[scale]
	);

	return (
		<Box style={styles.container}>
			<Animated.View
				style={[
					{
						width: height,
						height,
						transform: [],
					},
					style,
					styles.rect,
				]}
			/>
		</Box>
	);
}

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		alignItems: "center",
		flex: 1,
		justifyContent: "center",
		position: "absolute",
	},
	rect: {
		backgroundColor: "rgba(0,0,0,0.15)",
		borderRadius: 999,
	},
});
