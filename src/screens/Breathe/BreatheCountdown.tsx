import React, { useEffect, useState } from "react";

import { BreatheState } from "./Breathe.interface";
import { commonStyles } from "./common.styles";

import { useBreathe } from "./context/useBreathe";

import { Box } from "~/components/Box";
import { Text } from "~/components/Text";

export function BreatheCountdown() {
	const [countdown, setCountdown] = useState(5);
	const [_, setBreathing] = useBreathe();

	useEffect(() => {
		const interval = setInterval(() => {
			setCountdown((prev) => {
				if (prev) {
					return prev - 1;
				}

				clearInterval(interval);
				return prev;
			});
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	useEffect(() => {
		if (!countdown) {
			setBreathing(BreatheState.TIMER);
		}
	}, [countdown]);

	return (
		<Box style={commonStyles.center}>
			<Text style={commonStyles.largeText}>{countdown || 1}</Text>
		</Box>
	);
}
