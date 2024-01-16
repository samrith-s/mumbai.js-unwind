import React from "react";

import { View, type ViewProps } from "react-native";

import { GlobalStyles } from "~/styles";

export function Box({ style, children, ...rest }: ViewProps) {
	return (
		<View
			{...rest}
			style={[GlobalStyles.container, style]}
		>
			{children}
		</View>
	);
}
