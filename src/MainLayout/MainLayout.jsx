import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* Navbar always on top */}
            <div className="relative z-[100]">
                <Navbar />
            </div>
    
            {/* Outlet content below the navbar */}
            <div className=" relative z-0">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
