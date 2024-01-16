import { useEffect } from "react";

import { Gesture } from "react-native-gesture-handler";
import {
	interpolateColor,
	runOnJS,
	useSharedValue,
} from "react-native-reanimated";

import { useColor } from "~/color";
import {
	COLORS_INTERPOLATIONS,
	COLORS_LIST,
	COLORS_LIST_LENGTH,
} from "~/colors";

export function useColorsGesture(callback: (index: number) => void) {
	const { index: currentIndex, color: currentColor, setColor } = useColor();

	const index = useSharedValue(currentIndex);
	const color = useSharedValue<string>(currentColor);

	useEffect(() => {
		callback(currentIndex + 1);
	}, [callback]);

	const pan = Gesture.Pan().onEnd((e) => {
		if (e.velocityX < 0) {
			if (index.value < COLORS_LIST_LENGTH - 1) {
				index.value++;
			} else {
				index.value = 0;
			}
		} else {
			if (index.value > 0) {
				index.value--;
			} else {
				index.value = COLORS_LIST_LENGTH - 1;
			}
		}

		runOnJS(callback)(index.value + 1);
		runOnJS(setColor)(index.value);

		color.value = interpolateColor(
			index.value,
			COLORS_INTERPOLATIONS,
			COLORS_LIST
		);
	});

	return { pan, index, color };
}
