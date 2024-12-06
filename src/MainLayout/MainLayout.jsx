import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="container mx-auto min-h-screen">
                <Outlet></Outlet>
            </div> 
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;