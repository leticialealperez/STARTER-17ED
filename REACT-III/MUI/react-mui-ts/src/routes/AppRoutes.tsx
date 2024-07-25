import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DefaultLayout } from "../configs/layout/DefaultLayout";
import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    ),
  },
  {
    path: "/cart",
    element: (
      <DefaultLayout>
        <Cart />
      </DefaultLayout>
    ),
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
