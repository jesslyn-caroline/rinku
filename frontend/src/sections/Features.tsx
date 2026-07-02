function Features() {
    return (
    <section className={`w-full flex flex-col gap-y-8 px-6 md:px-16 py-24`}>
        <h2 className={`flex flex-row items-end gap-x-6`}>
            <span className={`text-2xl font-medium`}>Features</span>
            <span className={`uppercase text-secondary font-dm-mono text-xs tracking-widest leading-5`}>What You Get</span>
        </h2>
        <ul className={`grid grid-cols-1 md:grid-cols-2 md:grid-rows-2`}>
            <li className={`flex flex-col gap-y-3 px-6 lg:px-12 py-10 border-b md:border-r border-text/12`}>
                <h3 className={`text-lg font-medium`}>Instant URL Shortening</h3>
                <p className={`text-secondary font-noto-sans-jp text-sm`}>Convert long URLs into clean, shareable links with just one click.</p>
            </li>
            <li className={`flex flex-col gap-y-3 px-6 lg:px-12 py-10 border-b border-text/12`}>
                <h3 className={`text-lg font-medium`}>Daily Click Analytics</h3>
                <p className={`text-secondary font-noto-sans-jp text-sm`}>Monitor how many times your links are clicked each day with clear, easy-to-read charts that help you measure performance.</p>
            </li>
            <li className={`flex flex-col gap-y-3 px-6 lg:px-12 py-10 border-b md:border-b-0 md:border-r border-text/12`}>
                <h3 className={`text-lg font-medium`}>Customize Your Links</h3>
                <p className={`text-secondary font-noto-sans-jp text-sm`}>Create personalized aliases that match your brand or campaign.</p>
            </li>
            <li className={`flex flex-col gap-y-3 px-6 lg:px-12 py-10`}>
                <h3 className={`text-lg font-medium`}>Set Expiry Dates</h3>
                <p className={`text-secondary font-noto-sans-jp text-sm`}>Control how long your links stay active. Automatically disable links after a specific date or time to keep your content secure and up to date.</p>
            </li>
        </ul>
    </section>
)}

export default Features