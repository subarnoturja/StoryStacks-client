import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";



const DashboardLayout = () => {
    return (
        <div className="flex gap-4 flex-col md:flex-row">
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;