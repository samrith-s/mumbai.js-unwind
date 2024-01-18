import { sub } from "date-fns";

import { type Breathe } from "./store";

function randomIntFromInterval(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const COUNT = 200;
const STEP = 20;
const STEPS = COUNT / STEP;

let initial = COUNT;

export const DATA = Array.from({ length: COUNT }).map<Breathe>((_, i) => {
	if (i % STEPS === 1) {
		initial = initial - STEPS;
	}

	i === COUNT - 1 && console.log("Final initial", initial);

	return {
		date: sub(new Date(), {
			days: initial,
		}).valueOf(),
		time: randomIntFromInterval(10, 400),
	};
});
