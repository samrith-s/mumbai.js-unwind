import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
	center: {
		alignItems: "center",
		justifyContent: "center",
	},
	content: StyleSheet.absoluteFillObject,
	largeText: {
		fontSize: 72,
	},
	wrapper: {
		flex: 1,
		position: "relative",
	},
});
