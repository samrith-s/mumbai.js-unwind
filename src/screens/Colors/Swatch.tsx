import React from "react";

import { Pressable, StyleSheet } from "react-native";

import { useColor } from "~/color";
import { Palette } from "~/styles";

export type SwatchProps = {
	color: string;
};

export function Swatch({ color }: SwatchProps) {
	const { color: selectedColor, setColor } = useColor();

	return (
		<Pressable
			style={[
				style.swatch,
				color === selectedColor && style.swatchSelected,
				{
					backgroundColor: color,
				},
			]}
			onPress={() => {
				setColor(color);
			}}
		/>
	);
}

const style = StyleSheet.create({
	swatch: {
		borderColor: Palette.BORDER,
		borderRadius: 28,
		borderWidth: 4,
		height: 128,
		marginVertical: 6,
		width: "100%",
	},
	swatchSelected: {
		borderColor: Palette.FOREGROUND,
	},
});
