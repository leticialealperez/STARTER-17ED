import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { ListaPresenca } from '../../pages/ListaPresença';
import { Produtos } from '../../pages/Produtos';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/presenca',
        element: <ListaPresenca />
    },
    {
        path: '/produtos',
        element: <Produtos />
    }
]);

export function AppRoutes() {
    return <RouterProvider router={router} />
}