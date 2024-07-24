import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import { AppRoutes } from "./routes/AppRoutes";

export function App() {
  return (
    <>
      <CssBaseline />
      <AppRoutes />
    </>
  );
}
