import React from "react";

import { ScrollView, StyleSheet } from "react-native";

import { Box } from "~/components/Box";
import { Spacer } from "~/components/Spacer";

import { Text } from "~/components/Text";

export function Colors() {
	return (
		<Box>
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<Spacer header />
				{Array.from({ length: 100 }).map((_, i) => (
					<Text key={i}>Colors {i + 1}</Text>
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
