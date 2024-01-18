import React, { useState } from "react";

import { StyleSheet, View } from "react-native";

import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import { BreatheState } from "./Breathe.interface";
import { BreatheCountdown } from "./BreatheCountdown";
import { BreatheSuccess } from "./BreatheSuccess";
import BreatheTimer from "./BreatheTimer";
import { commonStyles } from "./common.styles";
import { BreatheProvider } from "./context/BreatheProvider";

import { useColor } from "~/color";
import { Box } from "~/components/Box";
import { Breather } from "~/components/Breather";
import { Spacer } from "~/components/Spacer";

export function Breathe() {
	const { color } = useColor();
	const store = useState(BreatheState.COUNTDOWN);
	const [timer, setTimer] = useState(0);

	const [state] = store;

	return (
		<BreatheProvider value={store}>
			<Box
				style={[
					commonStyles.wrapper,
					{
						backgroundColor: color,
					},
				]}
			>
				<Breather animate={state === BreatheState.TIMER} />
				<View style={[commonStyles.content, styles.container]}>
					<Spacer header />
					{state === BreatheState.COUNTDOWN && (
						<Animated.View
							exiting={FadeOut.duration(500)}
							style={commonStyles.content}
						>
							<BreatheCountdown />
						</Animated.View>
					)}

					{state === BreatheState.TIMER && (
						<Animated.View
							entering={FadeIn.delay(500).duration(500)}
							exiting={FadeOut.duration(500)}
							style={commonStyles.content}
						>
							<BreatheTimer setTimer={setTimer} />
						</Animated.View>
					)}

					{state === BreatheState.SUCCESS && (
						<Animated.View
							entering={FadeIn.delay(500).duration(500)}
							exiting={FadeOut.duration(1000)}
							style={commonStyles.content}
						>
							<BreatheSuccess time={timer} />
						</Animated.View>
					)}
				</View>
			</Box>
		</BreatheProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 20,
	},
});
