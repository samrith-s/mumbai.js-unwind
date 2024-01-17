import React, { useEffect, useState } from "react";

import { StyleSheet, View } from "react-native";

import Animated, {
	FadeIn,
	FadeInUp,
	FadeOut,
	useAnimatedStyle,
	useSharedValue,
	withRepeat,
	withTiming,
} from "react-native-reanimated";

import { Feather } from "@expo/vector-icons";

import { useColor } from "~/color";
import { BackButton } from "~/components/BackButton";

import { Box } from "~/components/Box";
import { Breather } from "~/components/Breather";
import { Bold } from "~/components/Text";
import { Palette } from "~/styles";

export function Breathe() {
	const { color } = useColor();
	const [counter, setCounter] = useState(5);
	const [timer, setTimer] = useState(30);
	const [animate, setAnimate] = useState(false);

	const countdown = useSharedValue<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prev) => {
				if (prev) {
					return prev - 1;
				} else {
					clearInterval(interval);
					setAnimate(true);
				}

				return prev;
			});
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		let interval: NodeJS.Timeout;

		if (!counter) {
			interval = setInterval(() => {
				setTimer((prev) => {
					if (prev) {
						return prev - 1;
					} else {
						clearInterval(interval);
					}

					return prev;
				});
			}, 1000);
		}

		return () => {
			clearInterval(interval);
		};
	}, [counter]);

	useEffect(() => {
		countdown.value = withRepeat(
			withTiming(1, {
				duration: 500,
			}),
			10,
			true
		);
	}, []);

	return (
		<Box
			style={[
				styles.wrapper,
				{
					backgroundColor: color,
				},
			]}
		>
			<Breather animate={animate} />
			<View style={styles.content}>
				{/* {!!counter && (
					<Animated.Text
						entering={FadeIn}
						layout={FadeInUp}
						exiting={FadeOut}
					>
						<Bold style={styles.countdown}>{counter}</Bold>
					</Animated.Text>
				)}
				{!!timer && !counter && (
					<Animated.Text
						entering={FadeIn}
						layout={FadeInUp}
						exiting={FadeOut}
					>
						<Bold style={styles.countdown}>{timer}</Bold>
					</Animated.Text>
				)}
				{!timer && !countdown && ( */}
				<Animated.View entering={FadeInUp}></Animated.View>
				{/* )} */}
			</View>
			<View style={styles.infoBox}>
				<BackButton />
			</View>
		</Box>
	);
}

const styles = StyleSheet.create({
	content: {
		...StyleSheet.absoluteFillObject,
		alignItems: "center",
		justifyContent: "center",
	},
	countdown: {
		color: Palette.FOREGROUND,
		fontSize: 72,
	},
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
	wrapper: {
		position: "relative",
	},
});
