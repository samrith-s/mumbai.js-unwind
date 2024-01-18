import { format } from "date-fns";

import { type Entry, type SectionData } from "./List.interface";

import { DATA } from "~/generate-data";
import { Store } from "~/store";

export const GRADES = ["#A20021", "#F56416", "#FFDB58", "#5FCC79", "#228B22"];
export const GRADES_LENGTH = GRADES.length;

export function groupData() {
	const data = [...DATA, ...Store.getData()];

	return data.reverse().reduce<SectionData[]>((acc, { date, time }) => {
		const dateString = format(date, "do MMMM , yyyy");
		const index = acc.findIndex((entry) => entry.title === dateString);

		let grade = Math.floor(time / 60);
		grade = grade < 4 ? grade : 4;

		const entry: Entry = {
			date,
			time,
			grade,
			color: GRADES[grade] || GRADES[4],
		};

		if (index === -1) {
			acc.push({
				title: dateString,
				data: [entry],
			});
		} else {
			acc[index].data.push(entry);
		}

		return acc;
	}, []);
}
