import { RiBarChartFill, RiLink, RiLogoutBoxLine, RiMenuFoldLine, RiNumbersFill, RiSettings3Line  } from "@remixicon/react"
import { Link, useLocation } from "react-router-dom"
import TextButton from "../components/buttons/TextButton"

interface Props {
    isOpen: boolean,
    isMobile: boolean,
    toggleSideBar: (value: boolean) => void
}

function SideBar({ isOpen, isMobile, toggleSideBar }: Props) {
    const location = useLocation()

    const navigation = [
        { path: '/overview', label: 'Overview', Icon: RiNumbersFill },
        { path: '/my-links', label: 'My Links', Icon: RiLink },
        { path: '/analytics', label: 'Analytics', Icon: RiBarChartFill },
        { path: '/settings', label: 'Settings', Icon: RiSettings3Line },
    ]

    return (
    <div className={`
        ${ isOpen ? 'translate-x-0' : '-translate-x-full hidden' } ${ isMobile ? 'absolute' : 'sticky' } 
        max-w-64 bg-accent h-screen w-full z-20 top-0
        grid grid-rows-[fit-content(48px)_1fr_fit-content(48px)] 
        border-r border-text/12 divide-y divide-text/12
    `}>
        <div className={`px-5 py-4`}>
            <RiMenuFoldLine size={20} className={`text-secondary`} onClick={() => toggleSideBar(false)}/>       
        </div>
        <div className={`flex flex-col gap-y-1 px-3 py-4`}>
            { navigation.map((nav) => {
                const { path, label, Icon } = nav
                return (
                <Link to={nav.path} className={`
                    outline-none w-full h-fit p-3 flex flex-row items-center gap-x-4 
                    ${ location.pathname === path ? 
                        'bg-primary/10 border-l-3 border-primary' : 
                        'hover:bg-secondary/10' 
                    } transition
                `}>
                    <Icon size={18} className={location.pathname === nav.path ? 'text-primary' : 'text-secondary'}/>
                    <span className={`
                        uppercase font-dm-mono text-sm tracking-widest 
                        ${location.pathname === nav.path ? 'text-text font-medium' : 'text-secondary'}
                    `}>{ label }</span>
                </Link>
            )}) }
        </div>
        <div className={`flex flex-col gap-y-1 px-5`}>
            <TextButton label="Log out" Icon={RiLogoutBoxLine} onClick={() => {}} disabled={false} />
        </div>
    </div>
)}

export default SideBar