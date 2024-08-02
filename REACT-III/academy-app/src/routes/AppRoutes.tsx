import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Assessments } from "../pages/Assessments";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Assessments />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={appRouter} />;
}
