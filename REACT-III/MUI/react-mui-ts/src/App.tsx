import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { AppRoutes } from "./routes/AppRoutes";
import { store } from "./store";

export function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <AppRoutes />
    </Provider>
  );
}
