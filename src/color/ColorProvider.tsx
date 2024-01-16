import React, { useMemo, useState } from "react";

import { COLOR_KEY } from "./Color.constants";
import { ColorContext } from "./ColorContext";

import { Storage } from "~/storage";

const COLOR = parseInt(Storage.getString(COLOR_KEY) || "0", 10);

export type ColorProviderProps = {
	children: React.ReactNode;
};

export function ColorProvider({ children }: ColorProviderProps) {
	const [color, setColor] = useState(COLOR || 0);

	const contextValue = useMemo(
		() => ({
			color,
			setColor(color: number) {
				setColor(color);
				Storage.set(COLOR_KEY, color.toString());
			},
		}),
		[color, setColor]
	);

	return (
		<ColorContext.Provider value={contextValue}>
			{children}
		</ColorContext.Provider>
	);
}
