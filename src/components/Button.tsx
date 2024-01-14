import React from "react";

import {
	Pressable,
	type PressableProps,
	StyleSheet,
	type StyleProp,
	type TextStyle,
	type ViewStyle,
} from "react-native";

import { Text } from "./Text";

export type ButtonProps = PressableProps & {
	children?: never;
	label: string;
	labelStyle?: StyleProp<TextStyle>;
};

export function Button({ label, style, labelStyle, ...rest }: ButtonProps) {
	return (
		<Pressable
			{...rest}
			style={[styles.button, style as ViewStyle]}
		>
			<Text style={[styles.buttonText, labelStyle]}>{label}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#333",
		borderRadius: 999,
		paddingHorizontal: 24,
		paddingVertical: 12,
	},
	buttonText: {
		fontSize: 16,
	},
});
