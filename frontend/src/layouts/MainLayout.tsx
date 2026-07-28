import { Outlet } from "react-router";
import NavBar from "./NavBar";
import ToastContainer_ from "../components/toasts/ToastContainer_";

function MainLayout() {
    return (
    <div className={`w-full flex flex-col items-center`}>
        <NavBar />
        <div className={`max-w-480 min-h-screen w-full h-fit flex flex-col`}>
            <Outlet />
        </div>
        <ToastContainer_ />
    </div>
)}

export default MainLayout