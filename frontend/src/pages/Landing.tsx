import NavBar from "../layouts/NavBar"
import Hero from "../sections/Hero"
import Features from "../sections/Features"
import CallToAction from "../sections/CallToAction"
import Footer from "../layouts/Footer"

function Landing() {
    return (
    <div className={`w-full flex flex-col justify-center`}>
        <NavBar />
        <div className={`max-w-480 w-full min-h-screen`}>
            <Hero />
            <Features />
            <CallToAction />
            <Footer />
        </div>
    </div>
)}

export default Landing