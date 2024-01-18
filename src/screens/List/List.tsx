import React, { useRef } from "react";

import { SectionList, StyleSheet, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { groupData } from "./group-data";

import { renderItem, renderSectionHeader } from "./renderItem";

import { Box } from "~/components/Box";
import { Bold, Text } from "~/components/Text";
import { GlobalStyles, Palette } from "~/styles";

export function List() {
	const data = useRef(groupData()).current;
	const insets = useSafeAreaInsets();

	return (
		<>
			<View style={styles.handleContainer}>
				<View style={styles.handle} />
			</View>
			<Bold style={styles.title}>Your routines</Bold>
			<SectionList
				sections={data}
				renderItem={renderItem}
				renderSectionHeader={renderSectionHeader}
				style={GlobalStyles.container}
				contentContainerStyle={styles.list}
				stickySectionHeadersEnabled
				bounces={false}
				alwaysBounceVertical={false}
				contentInset={{
					bottom: insets.bottom * 2,
				}}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	handle: {
		backgroundColor: Palette.FOREGROUND_OFFSET,
		borderRadius: 999,
		height: 5,
		width: 50,
	},
	handleContainer: {
		alignItems: "center",
		height: 30,
		justifyContent: "center",
	},
	list: {
		backgroundColor: Palette.BACKGROUND,
	},
	title: {
		fontSize: 24,
		marginHorizontal: 20,
		marginVertical: 8,
	},
});
