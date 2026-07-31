import { Outlet } from "react-router-dom"
import SideBar from "./Sidebar"
import { RiMenuLine } from "@remixicon/react"
import { useEffect, useState } from "react"
import Logo from "../components/others/Logo"

function DashboardLayout() {

    const currWidth = window.innerWidth < 768

    const [isOpen, setIsOpen] = useState<boolean>(!currWidth)
    const toggleSideBar = (value: boolean) => setIsOpen(value)

    const [isMobile, setIsMobile] = useState<boolean>(currWidth)
    const handleResize = () => setIsMobile(window.innerWidth < 768)

    useEffect(() => window.addEventListener('resize', handleResize))

    return (
    <div className={`flex flex-row relative`}>
        {/* Overlay */}
        <div className={`absolute w-full min-h-screen h-full bg-black/40 z-10 ${!isMobile || !isOpen? 'hidden' : 'block'}`} />

        <SideBar isOpen={isOpen} toggleSideBar={toggleSideBar} isMobile={isMobile} />

        <div className={`w-full flex flex-col divide-y divide-text/12`}>
            <div className={`flex flex-row justify-between items-center px-5 py-3`}>
                <RiMenuLine size={20} onClick={() => toggleSideBar(true)} className={isOpen && !isMobile? 'hidden' : 'block'}/>
                <Logo />     
            </div>
            <div className={`p-4`}>
                <Outlet />
            </div>
        </div>
    </div>
)}

export default DashboardLayout