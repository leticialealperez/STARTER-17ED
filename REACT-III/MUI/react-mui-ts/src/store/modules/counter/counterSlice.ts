import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Store } from "../..";

// Define a type for the slice state
export interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0, // 5 <= number
};

// slice = conjunto de reducer + action + initial state
export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    // todas as formas de mudar o valor de counter
    incrementar: (estadoAtual) => {
      // lógica de gerenciamento do estado de counter
      estadoAtual.value += 1;
    },
    decrementar: (estadoAtual) => {
      // lógica de gerenciamento do estado de counter
      estadoAtual.value -= 1;
    },
    incremetarPorValor: (estadoAtual, action: PayloadAction<number>) => {
      // lógica de gerenciamento do estado de counter
      estadoAtual.value += action.payload;
    },
  },
});

export const { incrementar, decrementar, incremetarPorValor } = counterSlice.actions;

export const selectCount = (store: Store) => store.counter;

export default counterSlice.reducer;
