import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./modules/rootReducer";

const persistedReducer = persistReducer(
  {
    key: "app-store",
    storage: storage, // defaults to localStorage for web
  },
  rootReducer,
);

// gerente geral = {} <= estado global
export const store = configureStore({
  reducer: persistedReducer,
});

// configuração da persistencia dos dados no localStorage
export const persistor = persistStore(store);

export type Store = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// App => dispatch action => reducer => devolve o novo estado => interceptado pelo middleware => atualizar o localStorage => atualizar a store

// App => interceptada pelo middleware => buscar dados no localStorage => setar o valor da store => caso não exista é utilizado o valor inicial
