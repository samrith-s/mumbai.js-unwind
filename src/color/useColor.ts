import { useContext } from "react";

import { ColorContext } from "./ColorContext";

import { COLORS_LIST } from "~/colors";

export function useColor() {
	const ctx = useContext(ColorContext);

	console.log("ctx.color:", ctx.color);

	return {
		color: COLORS_LIST.at(ctx.color) || COLORS_LIST[0],
		index: ctx.color,
		setColor: ctx.setColor,
	};
}
