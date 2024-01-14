import React from "react";

import { StyleSheet, View } from "react-native";

import { Button } from "~/components/Button";

import { Strong, Text } from "~/components/Text";

export function Home() {
	return (
		<View style={styles.container}>
			<Strong style={styles.title}>Unwind</Strong>
			<Text style={[styles.textOffset, styles.subtitle]}>
				The simplest way to <Strong style={styles.textBold}>unwind</Strong>, is
				to <Strong style={styles.textBold}>breathe</Strong>.
			</Text>
			<Button
				style={styles.button}
				label="Breathe"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		marginTop: 28,
	},
	container: {
		alignItems: "center",
		flex: 1,
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
		color: "#c1c1c1",
	},
	title: {
		color: "#333",
		flexShrink: 0,
		fontSize: 84,
		fontWeight: "700",
	},
});
