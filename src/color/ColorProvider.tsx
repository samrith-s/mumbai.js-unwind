import React, { useMemo, useState } from "react";

import { COLOR_KEY } from "./Color.constants";
import { ColorContext } from "./ColorContext";

import { Storage } from "~/storage";
import { Palette } from "~/styles";

const COLOR = Storage.getString(COLOR_KEY);

export type ColorProviderProps = {
	children: React.ReactNode;
};

export function ColorProvider({ children }: ColorProviderProps) {
	const [color, setColor] = useState(COLOR || Palette.BACKGROUND_OFFSET);

	const contextValue = useMemo(
		() => ({
			color,
			setColor(color: string) {
				setColor(color);
				Storage.set(COLOR_KEY, color);
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
