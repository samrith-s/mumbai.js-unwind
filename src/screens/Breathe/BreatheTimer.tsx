import React, { useEffect, useState } from "react";

import { StyleSheet, View } from "react-native";

import Animated from "react-native-reanimated";

import { BreatheState } from "./Breathe.interface";
import { formatSecondsToCounter } from "./Breathe.utils";
import { commonStyles } from "./common.styles";
import { useBreathe } from "./context/useBreathe";

import { BackButton } from "~/components/BackButton";
import { Box } from "~/components/Box";
import { Text } from "~/components/Text";

export type BreatheTimerProps = {
	setTimer: React.Dispatch<React.SetStateAction<number>>;
};

export default function BreatheTimer({ setTimer }: BreatheTimerProps) {
	const [countdown, setCountdown] = useState(0);
	const [_, setBreathing] = useBreathe();

	useEffect(() => {
		const interval = setInterval(() => {
			setCountdown((prev) => prev + 1);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [setTimer]);

	useEffect(() => {
		return () => {
			setTimer(countdown);
		};
	}, [countdown]);

	return (
		<Box style={commonStyles.center}>
			<Animated.View sharedTransitionTag="timer">
				<Text style={commonStyles.largeText}>
					{formatSecondsToCounter(countdown)}
				</Text>
			</Animated.View>

			<View style={styles.infoBox}>
				<BackButton
					onPress={() => {
						setBreathing(BreatheState.SUCCESS);
					}}
				/>
			</View>
		</Box>
	);
}

const styles = StyleSheet.create({
	infoBox: {
		alignItems: "center",
		bottom: 50,
		gap: 10,
		justifyContent: "center",
		left: 0,
		position: "absolute",
		right: 0,
		zIndex: 999,
	},
});
