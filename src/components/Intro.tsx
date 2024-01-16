import React from "react";

import { StyleSheet } from "react-native";

import Animated from "react-native-reanimated";

import { Bold, Strong, Text } from "./Text";

import { Palette } from "~/styles";

export function Intro() {
	return (
		<Animated.View sharedTransitionTag="intro">
			<Bold style={styles.title}>Unwind</Bold>

			<Text style={[styles.textOffset, styles.subtitle]}>
				The simplest way to <Strong style={styles.textBold}>unwind</Strong>, is
				to <Strong style={styles.textBold}>breathe</Strong>.
			</Text>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	subtitle: {
		marginTop: 0,
	},
	textBold: {
		fontWeight: "700",
	},
	textOffset: {
		color: Palette.FOREGROUND_OFFSET,
	},
	title: {
		color: Palette.FOREGROUND,
		flexShrink: 0,
		fontSize: 84,
		fontWeight: "700",
	},
});
