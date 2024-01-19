import React, { memo } from "react";

import { StyleSheet, View } from "react-native";

import { format } from "date-fns";

import { formatSecondsToCounter } from "../Breathe/Breathe.utils";

import { type Entry } from "./List.interface";

import { ListPie } from "./ListPie";

import { Text } from "~/components/Text";
import { Palette } from "~/styles";

export type ListItemProps = {
	data: Entry;
	index: number;
};

export const ListItem = memo(function ListItem({
	data: { date, time, grade, color },
	index,
}: ListItemProps) {
	return (
		<View style={[styles.item, index % 2 == 0 && styles.muted]}>
			<View style={styles.left}>
				<ListPie
					color={color}
					grade={grade + 1}
				/>
				<Text>{formatSecondsToCounter(time)}</Text>
			</View>
			<Text style={styles.textTime}>{format(date, "hh:mm aaa")}</Text>
		</View>
	);
});

const styles = StyleSheet.create({
	item: {
		alignItems: "center",
		flexDirection: "row",
		gap: 10,
		justifyContent: "space-between",
		padding: 20,
	},
	left: {
		alignItems: "center",
		flexDirection: "row",
		gap: 10,
	},
	muted: {
		backgroundColor: Palette.BACKGROUND_MUTED,
	},
	textTime: {
		color: Palette.FOREGROUND_OFFSET,
		fontSize: 14,
	},
});
