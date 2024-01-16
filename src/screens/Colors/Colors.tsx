import React from "react";

import { ScrollView, StyleSheet } from "react-native";

import { COLORS_LIST } from "./Colors.constants";

import { Swatch } from "./Swatch";

import { Box } from "~/components/Box";
import { Spacer } from "~/components/Spacer";

export function Colors() {
	return (
		<Box>
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<Spacer header />
				{COLORS_LIST.map((color) => (
					<Swatch
						key={color}
						color={color}
					/>
				))}
				<Spacer />
			</ScrollView>
		</Box>
	);
}

const styles = StyleSheet.create({
	scrollContainer: {
		paddingHorizontal: 10,
	},
});
