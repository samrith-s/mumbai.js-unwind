import React from "react";

import { enableFreeze } from "react-native-screens";

import { Providers } from "~/Providers";
import RootStack from "~/router/RootStack";

enableFreeze(true);

export default function App() {
	return (
		<Providers>
			<RootStack />
		</Providers>
	);
}
