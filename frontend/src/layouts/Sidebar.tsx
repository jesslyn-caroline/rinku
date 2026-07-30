import { RiBarChartFill, RiLink, RiLogoutBoxLine, RiNumbersFill, RiSettings3Line  } from "@remixicon/react"
import { Link, useLocation } from "react-router-dom"
import TextButton from "../components/buttons/TextButton"

function SideBar() {
    const location = useLocation()

    const navigation = [
        { path: '/overview', label: 'Overview', Icon: RiNumbersFill },
        { path: '/my-links', label: 'My Links', Icon: RiLink },
        { path: '/analytics', label: 'Analytics', Icon: RiBarChartFill },
        { path: '/settings', label: 'Settings', Icon: RiSettings3Line },
    ]

    return (
    <div className={`max-w-64 bg-accent h-screen w-full grid grid-rows-[fit-content(48px)_1fr_fit-content(48px)] sticky top-0 border-r border-text/12 divide-y divide-text/12`}>
        <div className={`flex flex-row gap-x-3 items-center px-5 py-3`}>
            <span className={`size-6 bg-primary flex items-center justify-center`}>
                <RiLink size={14} className={`text-white`}/>
            </span>
            <h1 className={`text-lg`}>rinku.io</h1>
        </div>
        <div className={`flex flex-col gap-y-1 px-3 py-4`}>
            { navigation.map((nav) => {
                return (
                <Link to={nav.path} className={`
                    w-full h-fit p-3 flex flex-row items-center gap-x-4
                    uppercase font-dm-mono text-sm tracking-widest
                    ${ location.pathname === nav.path ? 
                        'bg-primary/10 text-black font-medium border-l-3 border-primary' : 
                        'text-secondary hover:bg-secondary/10'
                    }
                    transition
                `}>
                    <nav.Icon size={18} className={location.pathname === nav.path ? 'text-primary' : 'text-secondary'}/>
                    <span className={``}>{ nav.label }</span>
                </Link>
            )}) }
        </div>
        <div className={`flex flex-col gap-y-1 px-5`}>
            <TextButton label="Log out" Icon={RiLogoutBoxLine} onClick={() => {}} disabled={false} />
        </div>
    </div>
)}

export default SideBar