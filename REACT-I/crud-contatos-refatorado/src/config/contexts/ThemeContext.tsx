import { createContext } from "react";
import { DefaultTheme } from "styled-components";
import { lightTheme } from "../themes/light";

export const ThemeContext = createContext<{ theme: DefaultTheme; changeTheme: () => void }>({
	theme: lightTheme,
	changeTheme: () => {},
});
