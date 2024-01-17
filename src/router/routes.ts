export enum Routes {
	HOME = "home",
	COLORS = "colors",
	BREATHE = "breathe",
	BREATHE_COUNTDOWN = "breathe-countdown",
	BREATHE_TIMER = "breathe-timer",
	BREATHE_SUCCESS = "breathe-success",
}

export type RootStackParamsList = {
	[Routes.HOME]: undefined;
	[Routes.COLORS]: undefined;
	[Routes.BREATHE]: undefined;
};
