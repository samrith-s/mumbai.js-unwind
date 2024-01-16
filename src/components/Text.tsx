import React from "react";

import { Text as RNText, StyleSheet, type TextProps } from "react-native";

export function Text({ children, style, ...rest }: TextProps) {
	return (
		<RNText
			style={[styles.baseText, style]}
			{...rest}
		>
			{children}
		</RNText>
	);
}

export function Strong({ children, style, ...rest }: TextProps) {
	return (
		<Text
			style={[styles.baseStrong, style]}
			{...rest}
		>
			{children}
		</Text>
	);
}

export function Bold({ children, style, ...rest }: TextProps) {
	return (
		<Text
			style={[styles.baseBold, style]}
			{...rest}
		>
			{children}
		</Text>
	);
}

const styles = StyleSheet.create({
	baseBold: {
		fontFamily: "Lato_900Black",
	},
	baseStrong: {
		fontFamily: "Lato_700Bold",
	},
	baseText: {
		color: "#ffffff",
		fontFamily: "Lato_400Regular",
		fontSize: 16,
	},
});
