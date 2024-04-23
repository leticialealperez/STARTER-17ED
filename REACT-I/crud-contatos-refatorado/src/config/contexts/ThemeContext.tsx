import { createContext } from "react";
import { DefaultTheme } from "styled-components";
import { lightTheme } from "../themes/light";

interface ThemeContextType {
	theme: DefaultTheme;
	changeTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
	theme: lightTheme,
	changeTheme: () => {},
});
