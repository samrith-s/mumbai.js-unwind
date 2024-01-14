import React, { useEffect } from "react";

import { StyleSheet } from "react-native";

import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
	Lato_400Regular,
	Lato_700Bold,
	useFonts,
} from "@expo-google-fonts/lato";
import { NavigationContainer, type Theme } from "@react-navigation/native";

export type ProvidersProps = {
	children: React.ReactNode;
};

const NAVIGATOR_THEME: Theme = {
	dark: true,
	colors: {
		border: "#222",
		notification: "#000",
		text: "#fff",
		primary: "#fff",
		background: "#141515",
		card: "#141515",
	},
};

export function Providers({ children }: ProvidersProps) {
	const [fontLoaded] = useFonts({
		Lato_400Regular,
		Lato_700Bold,
	});

	useEffect(() => {
		if (fontLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontLoaded]);

	return (
		<SafeAreaProvider>
			<NavigationContainer theme={NAVIGATOR_THEME}>
				<ProvidersInner>{children}</ProvidersInner>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

function ProvidersInner({ children }: ProvidersProps) {
	return (
		<GestureHandlerRootView style={styles.container}>
			<StatusBar style="dark" />
			{children}
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
