import React from "react";

import { type ListRenderItemInfo } from "react-native";

import { type Entry, type SectionData } from "./List.interface";
import { ListHeader } from "./ListHeader";
import { ListItem } from "./ListItem";

export function keyExtractor(item: Entry, index: number) {
	return `${item.date.toString()}-${index}`;
}

export function renderItem({ item, index }: ListRenderItemInfo<Entry>) {
	return (
		<ListItem
			data={item}
			index={index}
		/>
	);
}

export function renderSectionHeader({ section }: { section: SectionData }) {
	return <ListHeader data={section} />;
}
