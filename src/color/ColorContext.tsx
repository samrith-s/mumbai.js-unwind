import { createContext } from "react";

export type ColorContextValue = {
	color: string;
	setColor: (color: string) => void;
};

export const ColorContext = createContext<ColorContextValue>({
	color: "",
	setColor: () => {},
});
