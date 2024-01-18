import React from "react";

import { BreatheContext, type BreatheContextValue } from "./BreatheContext";

export type BreatheProviderProps = {
	children: React.ReactNode;
	value: BreatheContextValue;
};

export function BreatheProvider({ children, value }: BreatheProviderProps) {
	return (
		<BreatheContext.Provider value={value}>{children}</BreatheContext.Provider>
	);
}
