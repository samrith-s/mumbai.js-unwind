import React from "react";

import { StyleSheet, View } from "react-native";

import { StackActions, useNavigation } from "@react-navigation/native";

import { useColor } from "~/color";
import { Breather } from "~/components/Breather";
import { Button } from "~/components/Button";

import { Intro } from "~/components/Intro";
import { Routes } from "~/router/routes";
import { GlobalStyles } from "~/styles";

export function Home() {
	const navigation = useNavigation();
	const { color } = useColor();

	return (
		<View style={styles.container}>
			<View
				style={[
					styles.background,
					{
						backgroundColor: color,
					},
				]}
			>
				<Breather />
			</View>
			<View style={styles.inner}>
				<Intro />

				<View style={styles.buttonGroup}>
					<Button
						style={[
							styles.button,
							{
								backgroundColor: color,
							},
						]}
						label="Let's go"
						onPress={() => {
							navigation.dispatch(StackActions.push(Routes.BREATHE));
						}}
					/>

					<Button
						blurBg
						intensity={10}
						blurReductionFactor={200}
						style={styles.button}
						label="Choose color"
						onPress={() => {
							navigation.dispatch(StackActions.push(Routes.COLORS));
						}}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	background: {
		bottom: 0,
		left: 0,
		opacity: 0.5,
		position: "absolute",
		right: 0,
		top: 0,
	},
	button: {
		backgroundColor: "rgba(255,255,255,0.01)",
		marginTop: 28,
		width: "auto",
	},
	buttonGroup: {
		flexDirection: "row",
		gap: 20,
	},
	container: {
		...GlobalStyles.container,
		position: "relative",
	},
	inner: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center",
	},
});
