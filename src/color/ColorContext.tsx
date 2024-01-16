import { createContext } from "react";

export type ColorContextValue = {
	color: number;
	setColor: (color: number) => void;
};

export const ColorContext = createContext<ColorContextValue>({
	color: 0,
	setColor: () => {},
});
