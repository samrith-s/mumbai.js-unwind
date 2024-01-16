import { useContext } from "react";

import { ColorContext } from "./ColorContext";

export function useColor() {
	return useContext(ColorContext);
}
