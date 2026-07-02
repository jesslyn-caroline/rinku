import { RiArrowRightLine } from "@remixicon/react"

function CallToAction() {
    return (
    <section className={`bg-accent w-full grid grid-cols-1 md:grid-cols-2 gap-y-6 px-6 md:px-16 py-16 md:py-24 border-y border-text/12`}>
        <div className={`flex flex-col gap-y-3`}>
            <h2 className={`text-2xl font-medium`}>Ready to Make Every Link Count?</h2>
            <h3 className={`font-noto-sans-jp text-md text-secondary font-thin`}>Free to start. No credit card. No noise.</h3>
        </div>
        <div className={`flex md:justify-end md:items-end`}>
            <button className={`flex flex-row items-center gap-x-1 md:gap-x-2 px-6 py-3 bg-primary hover:bg-primary/80  transition-all text-white`}>
                <span className={`uppercase font-dm-mono text-xs tracking-widest`}>Create Free Account</span>
                <RiArrowRightLine size={16} />
            </button>
        </div>
    </section>
)}

export default CallToAction