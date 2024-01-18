import { Storage } from "./storage";

export type Breathe = {
	date: number;
	time: number;
};

const DATA_KEY = "breathe-data";

export const Store = {
	getData(): Breathe[] {
		const data = Storage.getString(DATA_KEY);

		return JSON.parse(data || "[]");
	},
	setData(entry: Breathe) {
		const data = this.getData();
		data.push(entry);

		Storage.set(DATA_KEY, JSON.stringify(data));
	},
};
