import Hero from "../sections/Hero"
import Features from "../sections/Features"
import CallToAction from "../sections/CallToAction"
import Footer from "../layouts/Footer"

function Landing() {
    return (
    <div className={`w-full flex flex-col `}>
        <Hero />
        <Features />
        <CallToAction />
        <Footer />
    </div>
)}

export default Landing