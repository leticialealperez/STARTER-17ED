import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { AppRoutes } from "./routes/AppRoutes";
import { persistor, store } from "./store";

export function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CssBaseline />
        <AppRoutes />
      </PersistGate>
    </Provider>
  );
}
