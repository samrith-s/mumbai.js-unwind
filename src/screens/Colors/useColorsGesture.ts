import { useEffect, useState } from "react";

import { Gesture } from "react-native-gesture-handler";
import {
	interpolateColor,
	runOnJS,
	useSharedValue,
	useWorkletCallback,
} from "react-native-reanimated";

import { useColor } from "~/color";
import {
	COLORS_INTERPOLATIONS,
	COLORS_LIST,
	COLORS_LIST_LENGTH,
} from "~/colors";

export function useColorsGesture(callback: (index: number) => void) {
	const { index: currentIndex, color: currentColor, setColor } = useColor();

	const [index, setIndex] = useState(currentIndex);

	const color = useSharedValue<string>(currentColor);

	useEffect(() => {
		runOnJS(callback)(index + 1);
		runOnJS(setColor)(index);

		color.value = interpolateColor(index, COLORS_INTERPOLATIONS, COLORS_LIST);
	}, [index, callback, setColor]);

	const handleNext = useWorkletCallback(() => {
		if (index < COLORS_LIST_LENGTH - 1) {
			runOnJS(setIndex)(index + 1);
		} else {
			runOnJS(setIndex)(0);
		}
	}, [index]);

	const handlePrev = useWorkletCallback(() => {
		if (index > 0) {
			runOnJS(setIndex)(index - 1);
		} else {
			runOnJS(setIndex)(COLORS_LIST_LENGTH - 1);
		}
	}, [index]);

	const pan = Gesture.Pan().onEnd((e) => {
		if (e.velocityX < 0) {
			handleNext();
		} else {
			handlePrev();
		}
	});

	return { handleNext, handlePrev, pan, index, color };
}
