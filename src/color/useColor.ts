import { useContext } from "react";

import { ColorContext } from "./ColorContext";

import { COLORS_LIST } from "~/colors";

export function useColor() {
	const ctx = useContext(ColorContext);

	return {
		color: COLORS_LIST.at(ctx.color) || COLORS_LIST[0],
		index: ctx.color,
		setColor: ctx.setColor,
	};
}
