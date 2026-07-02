import { RiArrowRightLine } from "@remixicon/react"

function Hero() {
    return (
    <section className={`flex flex-col`}>
        <div className={`min-h-screen flex flex-col justify-center gap-y-4 px-6 md:px-16`}>
            <h3 className={`border-l-2 border-primary px-6 py-1 uppercase font-dm-mono text-sm text-secondary tracking-[4px]`}>
                Url Shortener
            </h3>
            <h1 className={`text-4xl font-medium`}>
                Short Links, Big Reach.
            </h1>
            <h2 className={`font-noto-sans-jp text-md text-secondary font-thin`}>
                Turn long URLs into clean, trackable links. Nothing more, nothing less.
            </h2>
            <div className={`mt-3 lg:w-1/2 bg-accent border border-text/12 divide-y divide-text/12 font-dm-mono text-secondary`}>
                <input className={`w-full text-sm px-2 md:px-4 py-3.5 `} placeholder="https://your-long-url.com/paste/here"/>
                <div className={`flex flex-row justify-between items-center px-2 md:px-4 py-2`}>
                    <span className={`uppercase text-xs tracking-widest`}>Paste or type a URL</span>
                    <button className={`uppercase flex flex-row items-center gap-x-2 bg-primary hover:bg-primary/80 transition px-4 py-2.5 text-background`}>
                        <span className={`font-dm-mono text-xs tracking-widest`}>Shorten</span>
                        <RiArrowRightLine size={16} />
                    </button>
                </div>
            </div>
        </div>
        
        <div className={`px-6 md:px-16 grid grid-cols-2 border border-text/12 divide-x divide-text/12`}>
            <div className={`flex flex-col gap-y-2 px-6 md:px-12 py-6`}>
                <h3 className={`text-3xl font-medium`}>847M</h3>
                <h4 className={`uppercase font-dm-mono text-secondary text-xs tracking-widest`}>Link Shortened</h4>
            </div>
            <div className={`flex flex-col gap-y-2 px-6 md:px-12 py-6`}>
                <h3 className={`text-3xl font-medium`}>847</h3>
                <h4 className={`uppercase font-dm-mono text-secondary text-xs tracking-widest`}>Clicks Tracked</h4>
            </div>
        </div>
    </section>
)}

export default Hero