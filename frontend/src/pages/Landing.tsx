import NavBar from "../components/navigations/NavBar"
import Hero from "../sections/Hero"
import Features from "../sections/Features"

function Landing() {
    return (
    <div className={`w-full flex flex-col justify-center`}>
        <NavBar />
        <div className={`max-w-480 w-full min-h-screen pb-40`}>
            <Hero />
            <Features />
        </div>
    </div>
)}

export default Landing