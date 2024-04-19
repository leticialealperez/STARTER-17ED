import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		name: "dark" | "light";
		bgColor: string;
		textColor: string;
	}
}
