import { type NativeStackNavigationOptions } from "@react-navigation/native-stack";

export const HEADER_HEIGHT = 120;

export const STACK_SCREEN_OPTIONS: NativeStackNavigationOptions = {
	headerShown: false,
	animation: "fade",
	animationTypeForReplace: "pop",
	animationDuration: 500,
	freezeOnBlur: true,
};
