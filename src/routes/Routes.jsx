import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";
import SingleBook from "../Shop/SingleBook";
import Shop from "../Shop/Shop";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: '/book/:id',
                element: <SingleBook></SingleBook>,
                loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
            },
            {
                path: '/shop',
                element: <Shop></Shop>,
            }
        ]
    }
])