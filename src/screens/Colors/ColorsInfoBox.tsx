import React from "react";

import { View, StyleSheet, Pressable } from "react-native";

import { BlurView } from "expo-blur";

import { Feather } from "@expo/vector-icons";

import { COLORS_LIST_LENGTH } from "~/colors";
import { BackButton } from "~/components/BackButton";
import { Text } from "~/components/Text";

export type ColorsInfoBoxProps = {
	count: number;
	onNext(): void;
	onPrev(): void;
};

export function ColorsInfoBox({ count, onNext, onPrev }: ColorsInfoBoxProps) {
	return (
		<View style={styles.infoBox}>
			<Pressable onPress={onPrev}>
				<BlurView
					style={styles.nav}
					tint="dark"
					intensity={35}
					blurReductionFactor={1}
				>
					<Feather
						name="arrow-left"
						size={24}
						color="white"
					/>
				</BlurView>
			</Pressable>

			<BlurView
				tint="dark"
				intensity={80}
				blurReductionFactor={1}
				style={styles.info}
			>
				<Text style={styles.count}>
					{count} of {COLORS_LIST_LENGTH}
				</Text>
				<BackButton
					tint="light"
					intensity={10}
					iconOnly
				/>
			</BlurView>

			<Pressable onPress={onNext}>
				<BlurView
					style={styles.nav}
					tint="dark"
					intensity={35}
					blurReductionFactor={1}
				>
					<Feather
						name="arrow-right"
						size={24}
						color="white"
					/>
				</BlurView>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	count: {
		minWidth: 75,
		textAlign: "right",
	},
	info: {
		alignItems: "center",
		borderRadius: 999,
		flexDirection: "row",
		gap: 10,
		height: 52,
		justifyContent: "center",
		overflow: "hidden",
		paddingHorizontal: 10,
		paddingVertical: 10,
		textAlign: "center",
	},
	infoBox: {
		alignItems: "center",
		bottom: 50,
		flexDirection: "row",
		gap: 10,
		justifyContent: "center",
		left: 0,
		position: "absolute",
		right: 0,
		zIndex: 999,
	},
	nav: {
		alignItems: "center",
		borderRadius: 999,
		height: 52,
		justifyContent: "center",
		overflow: "hidden",
		width: 52,
	},
});
