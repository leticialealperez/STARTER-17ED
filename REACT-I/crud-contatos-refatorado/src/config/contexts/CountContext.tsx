import { createContext } from "react";

export const CountContext = createContext<{ value: number; changeCount: () => void }>({
	value: 0,
	changeCount: () => {},
});
