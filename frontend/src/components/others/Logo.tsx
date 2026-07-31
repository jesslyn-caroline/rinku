import { RiLink } from "@remixicon/react";

function Logo() {
    return (
    <div className={`flex flex-row gap-x-3 items-center`}>
        <span className={`size-6 bg-primary flex items-center justify-center`}>
            <RiLink size={16} className={`text-white`}/>
        </span>
        <h1 className={`text-lg`}>rinku.io</h1>
    </div> 
)}

export default Logo