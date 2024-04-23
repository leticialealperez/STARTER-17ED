import { Fragment, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";
import { ThemeContext } from "./config/contexts/ThemeContext";
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
			<ThemeContext.Provider value={{ theme: theme, changeTheme: toggleTheme }}>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<AppRoutes />
				</ThemeProvider>
			</ThemeContext.Provider>
		</Fragment>
	);
}
