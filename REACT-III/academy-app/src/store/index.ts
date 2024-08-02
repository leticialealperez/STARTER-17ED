import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import { rootReducer } from "./modules/rootReducer";

const persistedReducers = persistReducer(
  {
    key: "theme",
    storage: localStorage,
    whitelist: ["theme"],
  },
  rootReducer,
);

export const store = configureStore({
  reducer: persistedReducers,
});

export const persistedStore = persistStore(store);

export type GlobalState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
