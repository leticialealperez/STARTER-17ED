import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Contacts } from "../../pages/Contacts";
import { Home } from "../../pages/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/contacts",
		element: <Contacts />,
	},
]);

export function AppRoutes() {
	return <RouterProvider router={router} />;
}
