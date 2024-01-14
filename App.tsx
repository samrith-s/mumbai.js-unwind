import React from "react";

import { Providers } from "~/Providers";
import RootStack from "~/router/RootStack";

export default function App() {
	return (
		<Providers>
			<RootStack />
		</Providers>
	);
}
