import { Link, useLocation } from "react-router"

function NavBar() {
    const location = useLocation()

    return (
    <div className={`fixed top-0 bg-background w-full flex justify-center border-b text-text/20 z-50`}>
        <div className={`max-w-480 w-full flex justify-between items-center py-4 px-6 md:px-16`}>
            <h1 className={`flex flex-row items-end font-dm-mono`}>
                <span className={`uppercase text-xl text-primary tracking-widest leading-none`}>Rinku</span>
                <span className={`text-sm text-secondary leading-4`}>.io</span>
            </h1>
            {
                location.pathname === '/' ? 
                <div className={`flex flex-row items-center gap-x-6 font-noto-sans-jp`}>
                    <a href={`#`} className={`text-sm text-secondary tracking-widest leading-none`}>Log in</a>
                    <Link to="/signup" className={`uppercase bg-primary hover:bg-primary/80 transition px-4 py-2.5 font-dm-mono text-xs text-background tracking-widest`}>Sign up</Link>
                </div>
                : location.pathname === '/signup' ? 
                <span className={`uppercase font-dm-mono text-secondary text-xs tracking-widest`}>
                    Create Account
                </span>
                :
                <span className={`uppercase font-dm-mono text-secondary text-xs tracking-widest`}>
                    Log in
                </span>
            }
                
        </div>    
    </div>
)}

export default NavBar