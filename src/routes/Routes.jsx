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
    },
    {
        path: '/admin/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/admin/dashboard',
                element: <Dashboard></Dashboard>,
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