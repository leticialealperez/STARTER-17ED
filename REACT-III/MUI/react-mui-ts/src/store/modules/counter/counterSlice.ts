import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Store } from "../..";

// Define a type for the slice state
export interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
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

    resetar: (estadoAtual) => {
      // a lógica de zerar
      estadoAtual.value = initialState.value;
    },
  },
});

export const { incrementar, decrementar, incremetarPorValor, resetar } = counterSlice.actions;

export const selectCount = (store: Store) => store.counter;

export const counterReducer = counterSlice.reducer;
