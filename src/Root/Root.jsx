import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Pages/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;