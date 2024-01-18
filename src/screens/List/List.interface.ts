import { type Breathe } from "~/store";

export type Entry = Breathe & {
	color: string;
	grade: number;
};

export type SectionData = {
	title: string;
	data: Entry[];
};
