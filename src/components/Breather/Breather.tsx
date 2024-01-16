import React, { useMemo, useState } from "react";

import { type LayoutRectangle } from "react-native";

import { useDerivedValue, useSharedValue } from "react-native-reanimated";

import {
	Canvas,
	Group,
	Rect,
	Skia,
	vec,
	type SkMatrix,
} from "@shopify/react-native-skia";

import { type BreatherAnimationSequence } from "./breather-animation";

import { GlobalStyles } from "~/styles";

const CIRCLES = Array.from({ length: 10 });
const SHRINK_OFFSET = 100;

type BreatherProps = {
	animation?: BreatherAnimationSequence;
};

export const translate = (matrix: SkMatrix, x: number, y: number) => {
	"worklet";
	const m = Skia.Matrix();
	m.translate(x, y);
	m.concat(matrix);
	return m;
};

export function Breather({ animation }: BreatherProps) {
	const [layouted, setLayouted] = useState(false);
	const [layout, setLayout] = useState<LayoutRectangle>({
		x: 0,
		y: 0,
		width: 0,
		height: 0,
	});

	const scale = useSharedValue(1);

	const center = useMemo(() => vec(layout.width, layout.height), [layouted]);

	const transform = useDerivedValue(() => [
		{
			scale: scale.value,
		},
	]);

	// useEffect(() => {
	// 	if (layouted) {
	// 		console.log("layouted:", layouted);
	// 		scale.value = withTiming(10, {
	// 			duration: 1000,
	// 		});
	// 	}
	// }, [layouted]);

	return (
		<Canvas
			style={GlobalStyles.container}
			onLayout={(e) => {
				setLayout(e.nativeEvent.layout);
				setLayouted(true);
			}}
		>
			<Group
				blendMode="screen"
				origin={center}
				// transform={}
			>
				{CIRCLES.slice(2).map((_, i) => (
					<Rect
						key={`rect-${i}`}
						// matrix={processTransform2d([
						// 	{
						// 		scale: withDelay(
						// 			withTiming(scale.value, {
						// 				duration: 1000,
						// 			}),
						// 			i * 200
						// 		),
						// 	},
						// ])}
						transform={transform}
						x={0}
						y={(SHRINK_OFFSET / 2) * i}
						width={layout.width}
						height={layout.height - SHRINK_OFFSET * i}
						color={"black"}
						opacity={i * 0.05}
					/>
				))}
			</Group>
		</Canvas>
	);
}
