import { createContext } from "react";

import { BreatheState } from "../Breathe.interface";

export type BreatheContextValue = [
	breathing: BreatheState,
	setBreathing: React.Dispatch<React.SetStateAction<BreatheState>>,
];

export const BreatheContext = createContext<BreatheContextValue>([
	BreatheState.COUNTDOWN,
	() => {},
]);
