import { createContext } from "react";

export type BreatheContextValue = [
	breathing: boolean,
	setBreathing: React.Dispatch<React.SetStateAction<boolean>>,
];

export const BreatheContext = createContext<BreatheContextValue>([
	false,
	() => {},
]);
