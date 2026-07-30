import { Outlet } from "react-router-dom"
import SideBar from "./Sidebar"


function DashboardLayout() {
    return (
    <div className={`flex flex-row relative`}>
        <SideBar />
        <Outlet />
    </div>
)}

export default DashboardLayout