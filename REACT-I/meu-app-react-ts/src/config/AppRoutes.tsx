import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import { AboutUs } from '../pages/AboutUs';
import { Contacts } from '../pages/Contacts';
import { Home } from '../pages/Home';

const router = createBrowserRouter([
    // [0]
    {
        path: '/',
        element: <Home />
    },
    // [1]
    {
        path: '/contacts',
        element: <Contacts />
    },
    // [2]
    {
        path: '/about-us',
        element: <AboutUs />
    }
]);

export function AppRoutes() {
    return <RouterProvider  router={router} />
}