import { useContext } from "react";

import { BreatheContext } from "./BreatheContext";

export function useBreathe() {
	return useContext(BreatheContext);
}
