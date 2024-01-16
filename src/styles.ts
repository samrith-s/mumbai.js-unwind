import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export enum Palette {
	BACKGROUND = "#141415",
	BACKGROUND_OFFSET = "#333",
	FOREGROUND = "#FFFFFF",
	FOREGROUND_OFFSET = "#C1C1C1",
	BORDER = "#222222",
	NOTIFICATION = "#000000",
}
