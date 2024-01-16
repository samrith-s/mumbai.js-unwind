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
};

export function BackButton({
	style,
	intensity,
	tint = "dark",
}: BackButtonProps) {
	const navigation = useNavigation();

	return (
		<Pressable
			style={[styles.cross, style]}
			onPress={() => {
				if (navigation.canGoBack()) {
					navigation.goBack();
				}
			}}
		>
			<BlurView
				intensity={intensity}
				tint={tint}
				style={styles.crossInner}
			>
				<Feather
					name="arrow-left"
					size={24}
					color="white"
				/>
				<Text>Done</Text>
			</BlurView>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	cross: {
		borderRadius: 999,
		height: "auto",
		overflow: "hidden",
		width: "auto",
		zIndex: 999,
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
});
