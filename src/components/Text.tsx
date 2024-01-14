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
		<RNText
			style={[styles.baseText, style, styles.baseStrong]}
			{...rest}
		>
			{children}
		</RNText>
	);
}

const styles = StyleSheet.create({
	baseStrong: {
		fontFamily: "Lato_700Bold",
	},
	baseText: {
		color: "#ffffff",
		fontFamily: "Lato_400Regular",
		fontSize: 16,
	},
});
