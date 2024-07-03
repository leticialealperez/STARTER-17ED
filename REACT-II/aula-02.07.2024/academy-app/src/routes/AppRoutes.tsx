import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Assessments } from '../pages/Assessments';
import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/home',
        element: <Assessments />
    },
]);



export function AppRoutes() {
    return <RouterProvider router={router}/>
}