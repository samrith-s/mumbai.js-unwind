import React from "react";

import { StyleSheet } from "react-native";

import { Box } from "~/components/Box";
import { Breather } from "~/components/Breather";

export function Breathe() {
	return (
		<Box style={styles.wrapper}>
			<Breather />
		</Box>
	);
}

const styles = StyleSheet.create({
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
		flexDirection: "row",
		justifyContent: "center",
		left: 0,
		position: "absolute",
		right: 0,
	},
	wrapper: {
		position: "relative",
	},
});
