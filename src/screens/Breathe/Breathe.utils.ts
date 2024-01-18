import { intervalToDuration } from "date-fns";

export function formatSecondsToCounter(time: number) {
	const intervals = intervalToDuration({
		start: 0,
		end: time * 1000,
	});

	const minutes = String(intervals.minutes || 0).padStart(2, "0");
	const seconds = String(intervals.seconds || 0).padStart(2, "0");

	return `${minutes}:${seconds}`;
}
