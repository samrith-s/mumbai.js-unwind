import React from "react";

import {
	Pressable,
	StyleSheet,
	type PressableProps,
	type StyleProp,
	type TextStyle,
	type ViewStyle,
	View,
} from "react-native";

import { BlurView, type BlurTint } from "expo-blur";

import { Text } from "./Text";

import { Palette } from "~/styles";

export type ButtonProps = PressableProps & {
	children?: never;
	label?: string;
	labelStyle?: StyleProp<TextStyle>;
	style?: StyleProp<ViewStyle>;
	icon?: JSX.Element;
	iconOnly?: boolean;
} & (
		| {
				blurBg: true;
				intensity?: number;
				tint?: BlurTint;
				blurReductionFactor?: number;
		  }
		| {
				blurBg?: false;
				intensity?: never;
				tint?: never;
				blurReductionFactor?: never;
		  }
	);

export function Button({
	label,
	style,
	labelStyle,
	blurBg,
	intensity,
	tint,
	blurReductionFactor,
	icon,
	iconOnly,
	...rest
}: ButtonProps) {
	const iconWrapped = !!icon && <View style={styles.icon}>{icon}</View>;

	if (blurBg) {
		return (
			<Pressable {...rest}>
				<BlurView
					blurReductionFactor={blurReductionFactor}
					style={[styles.button, style, styles.blur]}
					tint={tint}
					intensity={intensity}
				>
					{iconWrapped}
					{!iconOnly && (
						<Text style={[styles.buttonText, labelStyle]}>{label}</Text>
					)}
				</BlurView>
			</Pressable>
		);
	}

	return (
		<Pressable
			{...rest}
			style={[styles.button, style]}
		>
			{iconWrapped}
			{!iconOnly && (
				<Text style={[styles.buttonText, labelStyle]}>{label}</Text>
			)}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	blur: {
		overflow: "hidden",
	},
	button: {
		alignItems: "center",
		backgroundColor: Palette.BACKGROUND_OFFSET,
		borderRadius: 999,
		flexDirection: "row",
		justifyContent: "center",
		paddingHorizontal: 24,
		paddingVertical: 12,
	},
	buttonText: {
		fontSize: 16,
	},
	icon: {
		marginRight: 5,
	},
});
