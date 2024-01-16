import React from "react";

import { StyleSheet, View } from "react-native";

import { StackActions, useNavigation } from "@react-navigation/native";

import { useColor } from "~/color";
import { Button } from "~/components/Button";

import { Strong, Text } from "~/components/Text";
import { Routes } from "~/router/routes";
import { GlobalStyles, Palette } from "~/styles";

export function Home() {
	const navigation = useNavigation();
	const { color } = useColor();

	return (
		<View style={styles.container}>
			<Strong style={styles.title}>Unwind</Strong>
			<Text style={[styles.textOffset, styles.subtitle]}>
				The simplest way to <Strong style={styles.textBold}>unwind</Strong>, is
				to <Strong style={styles.textBold}>breathe</Strong>.
			</Text>
			<Button
				style={[
					styles.button,
					{
						backgroundColor: color,
					},
				]}
				label="Breathe"
			/>
			<Text
				style={styles.altButton}
				onPress={() => {
					navigation.dispatch(StackActions.push(Routes.COLORS));
				}}
			>
				Set color
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	altButton: {
		fontSize: 12,
		marginTop: 14,
	},
	button: {
		marginTop: 28,
		width: "50%",
	},
	container: {
		...GlobalStyles.container,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	subtitle: {
		marginTop: 0,
	},
	textBold: {
		fontWeight: "700",
	},
	textOffset: {
		color: Palette.FOREGROUND_OFFSET,
	},
	title: {
		color: Palette.BACKGROUND_OFFSET,
		flexShrink: 0,
		fontSize: 84,
		fontWeight: "700",
	},
});
