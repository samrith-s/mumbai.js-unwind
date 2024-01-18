import React from "react";

import { StyleSheet } from "react-native";

import { BlurView } from "expo-blur";

import { type SectionData } from "./List.interface";

import { Bold } from "~/components/Text";
import { Palette } from "~/styles";

export type ListHeaderProps = {
	data: SectionData;
};

export function ListHeader({ data }: ListHeaderProps) {
	return (
		<BlurView
			tint="dark"
			intensity={50}
			style={styles.container}
		>
			<Bold style={styles.text}>{data?.title}</Bold>
		</BlurView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "rgba(0,0,0,0.5)",
		paddingHorizontal: 20,
		paddingVertical: 16,
	},
	text: {
		color: Palette.BACKGROUND_OFFSET,
		fontSize: 18,
	},
});
