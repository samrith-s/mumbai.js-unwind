import React, { useState } from "react";

import { BreatheContext } from "./BreatheContext";

export type BreatheProviderProps = {
	children: React.ReactNode;
};

export function BreatheProvider({ children }: BreatheProviderProps) {
	const state = useState(false);

	return (
		<BreatheContext.Provider value={state}>{children}</BreatheContext.Provider>
	);
}
