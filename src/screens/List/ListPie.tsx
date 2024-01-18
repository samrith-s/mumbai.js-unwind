import React from "react";

import { StyleSheet } from "react-native";

import { Canvas, Circle, Path, Skia } from "@shopify/react-native-skia";

import { GRADES_LENGTH } from "./group-data";

interface ListPieProps {
	color: string;
	grade: number;
}

const STROKE = 5;
const CANVAS_SIZE = 25;
const PATH_RADIUS = CANVAS_SIZE * 0.8;

export function ListPie({ color, grade }: ListPieProps) {
	const percent = grade / GRADES_LENGTH;
	const innerRadius = PATH_RADIUS / 2 - STROKE / 2;

	const path = Skia.Path.Make();
	path.addCircle(CANVAS_SIZE / 2, CANVAS_SIZE / 2, innerRadius);

	return (
		<Canvas style={styles.container}>
			<Circle
				cx={CANVAS_SIZE / 2}
				cy={CANVAS_SIZE / 2}
				r={CANVAS_SIZE / 2}
				color={color}
				opacity={0.1}
			/>
			<Path
				path={path}
				color={color}
				style="stroke"
				strokeJoin="round"
				strokeWidth={STROKE}
				strokeCap="round"
				start={0}
				end={percent}
			/>
		</Canvas>
	);
}

const styles = StyleSheet.create({
	container: {
		height: CANVAS_SIZE,
		width: CANVAS_SIZE,
	},
});
