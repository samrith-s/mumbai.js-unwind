import React, { useState } from "react";

import { StyleSheet, type LayoutRectangle } from "react-native";

import { BlurView } from "expo-blur";

import Animated from "react-native-reanimated";

import { BreatherSlice } from "./BreatherSlice";

import { GlobalStyles } from "~/styles";

const CIRCLES = Array.from({ length: 20 }).map((_, i) => i);

type BreatherProps = {
	animate?: boolean;
};

export function Breather({ animate }: BreatherProps) {
	const [layouted, setLayouted] = useState(false);
	const [layout, setLayout] = useState<LayoutRectangle>({
		x: 0,
		y: 0,
		width: 0,
		height: 0,
	});

	return (
		<Animated.View
			style={GlobalStyles.container}
			onLayout={(e) => {
				setLayout(e.nativeEvent.layout);
				setLayouted(true);
			}}
		>
			{layouted &&
				CIRCLES.map((index) => (
					<BreatherSlice
						key={`slide-${index}`}
						layout={layout}
						index={index}
						animate={animate}
					/>
				))}
			<BlurView
				style={styles.blurred}
				tint="dark"
				intensity={50}
			/>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	blurred: {
		...StyleSheet.absoluteFillObject,
	},
});
