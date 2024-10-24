import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="mx-7">
            <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;