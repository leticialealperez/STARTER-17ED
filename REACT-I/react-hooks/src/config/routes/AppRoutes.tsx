import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { ListaPresenca } from '../../pages/ListaPresença';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/presenca',
        element: <ListaPresenca />
    }
]);

export function AppRoutes() {
    return <RouterProvider router={router} />
}