import NavBar from "../layouts/NavBar"
import Hero from "../sections/Hero"
import Features from "../sections/Features"
import CallToAction from "../sections/CallToAction"
import Footer from "../layouts/Footer"

function Landing() {
    return (
    <div className={`w-full flex flex-col items-center`}>
        <NavBar />
        <div className={`max-w-480 min-h-screen w-full flex flex-col `}>
            <Hero />
            <Features />
            <CallToAction />
            <Footer />
        </div>
    </div>
)}

export default Landing