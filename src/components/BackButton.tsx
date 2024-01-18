import React from "react";

import {
	Pressable,
	type StyleProp,
	StyleSheet,
	type ViewStyle,
} from "react-native";

import { type BlurTint, BlurView } from "expo-blur";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Text } from "./Text";

export type BackButtonProps = {
	intensity?: number;
	tint?: BlurTint;
	style?: StyleProp<ViewStyle>;
	iconOnly?: boolean;
	onPress?(): void;
};

export function BackButton({
	style,
	intensity,
	tint = "dark",
	iconOnly,
	onPress,
}: BackButtonProps) {
	const navigation = useNavigation();

	return (
		<Pressable
			style={[styles.cross, iconOnly && styles.crossIconOnly, style]}
			onPress={() => {
				if (onPress) {
					onPress();
				} else if (navigation.canGoBack()) {
					navigation.goBack();
				}
			}}
		>
			<BlurView
				intensity={intensity}
				tint={tint}
				style={[styles.crossInner, iconOnly && styles.crossInnerIconOnly]}
			>
				<Feather
					name="check"
					size={iconOnly ? 18 : 24}
					color="white"
				/>
				{!iconOnly && <Text>Done</Text>}
			</BlurView>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	cross: {
		borderRadius: 999,
		height: 36,
		overflow: "hidden",
		width: "auto",
		zIndex: 999,
	},
	crossIconOnly: {
		width: "auto",
	},
	crossInner: {
		alignItems: "center",
		flex: 1,
		flexDirection: "row",
		gap: 4,
		justifyContent: "center",
		paddingHorizontal: 12,
		paddingVertical: 4,
	},
	crossInnerIconOnly: {
		gap: 0,
	},
});
