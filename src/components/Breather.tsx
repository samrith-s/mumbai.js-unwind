import React, { useState } from "react";

import { type LayoutRectangle } from "react-native";

import {
	type BlendMode,
	Canvas,
	Group,
	RoundedRect,
	type SkEnum,
} from "@shopify/react-native-skia";

import { GlobalStyles } from "~/styles";

const CIRCLES = Array.from({ length: 10 });
const SHRINK_OFFSET = 50;

type BreatherProps = {
	blendMode?: SkEnum<typeof BlendMode>;
};

export function Breather({ blendMode = "screen" }: BreatherProps) {
	const [layout, setLayout] = useState<LayoutRectangle>({
		x: 0,
		y: 0,
		width: 0,
		height: 0,
	});

	return (
		<Canvas
			style={GlobalStyles.container}
			onLayout={(e) => {
				setLayout(e.nativeEvent.layout);
			}}
		>
			<Group blendMode={blendMode}>
				{CIRCLES.map((_, i) => (
					<RoundedRect
						r={!i ? 0 : 40}
						key={`circle-${i}`}
						x={(SHRINK_OFFSET / 2) * i}
						y={(SHRINK_OFFSET / 2) * i}
						width={layout.width - SHRINK_OFFSET * i}
						height={layout.height - SHRINK_OFFSET * i}
						color={"black"}
						opacity={i * 0.05}
					/>
				))}
			</Group>
		</Canvas>
	);
}
