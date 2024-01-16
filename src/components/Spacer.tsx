import React from "react";

import { View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { HEADER_HEIGHT } from "~/router/router.constants";

export type SpacerProps = {
	size?: boolean;
	header?: boolean;
};

export function Spacer({ header }: SpacerProps) {
	const insets = useSafeAreaInsets();
	// const headerOffset = useHeaderOffsets();

	return (
		<View
			style={{
				height: header ? HEADER_HEIGHT : insets.bottom,
			}}
		/>
	);
}
