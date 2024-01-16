import React from "react";

import { View, StyleSheet } from "react-native";

import { BlurView } from "expo-blur";

import { Feather } from "@expo/vector-icons";

import { COLORS_LIST_LENGTH } from "~/colors";
import { BackButton } from "~/components/BackButton";
import { Text } from "~/components/Text";

export type ColorsInfoBoxProps = {
	count: number;
};

export function ColorsInfoBox({ count }: ColorsInfoBoxProps) {
	return (
		<View style={styles.infoBox}>
			<View style={styles.actionBox}>
				<Feather
					name="arrow-left"
					size={24}
					color="white"
				/>
				<Text>Swipe</Text>
				<Feather
					name="arrow-right"
					size={24}
					color="white"
				/>
			</View>
			<BlurView
				tint="light"
				intensity={10}
				blurReductionFactor={1}
				style={styles.info}
			>
				<BackButton />
				<Text>
					{count} of {COLORS_LIST_LENGTH}
				</Text>
			</BlurView>
		</View>
	);
}

const styles = StyleSheet.create({
	actionBox: {
		alignItems: "center",
		flexDirection: "row",
		gap: 20,
		justifyContent: "center",
		opacity: 0.5,
	},
	info: {
		alignItems: "center",
		borderRadius: 999,
		flexDirection: "row",
		gap: 10,
		height: "auto",
		justifyContent: "center",
		marginLeft: 10,
		overflow: "hidden",
		paddingHorizontal: 16,
		paddingVertical: 10,
		textAlign: "center",
	},
	infoBox: {
		alignItems: "center",
		bottom: 50,
		gap: 10,
		justifyContent: "center",
		left: 0,
		position: "absolute",
		right: 0,
		zIndex: 999,
	},
});
