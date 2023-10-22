import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div className="">
            <div>
                <Toaster></Toaster>
            </div>
            <div>
            <Navbar></Navbar>
            </div>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default MainLayout;