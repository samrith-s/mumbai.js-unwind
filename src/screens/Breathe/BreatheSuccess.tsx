import React from "react";

import { Feather } from "@expo/vector-icons";

import { commonStyles } from "./common.styles";

import { Box } from "~/components/Box";

export function BreatheSuccess() {
	return (
		<Box style={commonStyles.center}>
			<Feather
				name="check"
				size={200}
				color="white"
			/>
		</Box>
	);
}
