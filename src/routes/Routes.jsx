import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";
import SingleBook from "../Shop/SingleBook";
import Shop from "../pages/Shop";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

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
            },
            {
                path: '/sign-up',
                element: <Signup></Signup>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            }
        ]
    },
    {
        path: '/admin/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/admin/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
            },
            {
                path: '/admin/dashboard/upload',
                element: <UploadBook></UploadBook>,
            },
            {
                path: '/admin/dashboard/manage',
                element: <ManageBooks></ManageBooks>,
            },
            {
                path: '/admin/dashboard/edit-books/:id',
                element: <EditBooks></EditBooks>,
                loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
            },
        ]
    }
])