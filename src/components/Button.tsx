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

import { Palette } from "~/styles";

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
		alignItems: "center",
		backgroundColor: Palette.BACKGROUND_OFFSET,
		borderRadius: 999,
		justifyContent: "center",
		paddingHorizontal: 24,
		paddingVertical: 12,
	},
	buttonText: {
		fontSize: 16,
	},
});
