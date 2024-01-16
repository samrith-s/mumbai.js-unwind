import React, { useMemo } from "react";

import { StyleSheet, View } from "react-native";

import { BlurView } from "expo-blur";

import {
	type EdgeInsets,
	useSafeAreaInsets,
} from "react-native-safe-area-context";

import { getHeaderTitle, HeaderBackButton } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import {
	createStackNavigator,
	type StackNavigationOptions,
} from "@react-navigation/stack";

import { HEADER_HEIGHT } from "./router.constants";
import { Routes, type RootStackParamsList } from "./routes";

import { Text } from "~/components/Text";
import { Colors } from "~/screens/Colors";
import { Home } from "~/screens/Home";

const Stack = createStackNavigator<RootStackParamsList>();

function stackScreenOptions(insets: EdgeInsets): StackNavigationOptions {
	const headerHeight = HEADER_HEIGHT;

	return {
		headerBackTitleVisible: false,
		headerTransparent: true,
		headerMode: "screen",
		headerStyle: {
			height: headerHeight,
		},
		header({ options, route }) {
			const title = getHeaderTitle(options, route.name);

			const navigation = useNavigation();

			const canGoBack = navigation.canGoBack();

			return (
				<BlurView
					tint="dark"
					intensity={50}
					style={[
						{
							height: headerHeight,
							paddingTop: insets.top,
						},
						styles.header,
					]}
				>
					{canGoBack && (
						<HeaderBackButton
							onPress={() => {
								navigation.goBack();
							}}
							labelVisible={false}
							style={styles.headerBack}
						/>
					)}
					<View style={styles.headerInner}>
						<Text>{title}</Text>
					</View>
				</BlurView>
			);
		},
	};
}

export default function RootStack() {
	const insets = useSafeAreaInsets();

	const stackOptions = useMemo(() => stackScreenOptions(insets), [insets]);

	return (
		<Stack.Navigator screenOptions={stackOptions}>
			<Stack.Screen
				name={Routes.HOME}
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name={Routes.COLORS}
				component={Colors}
				options={{
					headerTitle: "Pick a color",
				}}
			/>
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	header: {
		alignItems: "center",
		backgroundColor: "transparent",
		borderBottomColor: "#242525",
		borderBottomWidth: 1,
		flexDirection: "row",
		gap: 10,
		paddingHorizontal: 10,
	},
	headerBack: {
		flexShrink: 0,
	},
	headerInner: {
		alignItems: "center",
		flexDirection: "row",
		flex: 1,
		flexShrink: 1,
		justifyContent: "center",
	},
});
