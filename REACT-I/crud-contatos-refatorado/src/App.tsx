import { Fragment, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";
import { ButtonToggleTheme } from "./components/styled/ButtonToggleTheme";
import { GlobalStyles } from "./config/global/GlobalStyles";
import { AppRoutes } from "./config/routes/AppRoutes";
import { darkTheme } from "./config/themes/dark";
import { lightTheme } from "./config/themes/light";

export function App() {
	const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

	useEffect(() => {
		const dataStorage = localStorage.getItem("theme");

		if (dataStorage) {
			setTheme(JSON.parse(dataStorage));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("theme", JSON.stringify(theme));
	}, [theme]);

	function toggleTheme() {
		theme.name === "light" ? setTheme(darkTheme) : setTheme(lightTheme);
	}

	return (
		<Fragment>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<AppRoutes />

				<ButtonToggleTheme onClick={toggleTheme}>
					{theme.name === "light" ? "🌛" : "🌞"}
				</ButtonToggleTheme>
			</ThemeProvider>
		</Fragment>
	);
}
