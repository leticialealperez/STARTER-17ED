import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counter/counterSlice";

// gerente geral = {} <= estado global
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type Store = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
