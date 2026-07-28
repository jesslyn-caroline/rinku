import type { RemixiconComponentType } from "@remixicon/react"

interface Props {
    label: string,
    Icon: RemixiconComponentType,
    onClick: () => void,
    disabled?: boolean
}

function BlockButton({ label, Icon, onClick, disabled }: Props) {
    return (
    <button 
        disabled={disabled}
        onClick={onClick}
        className={`
            w-full bg-primary py-3 text-white 
            hover:bg-primary/80 ${disabled ? 'cursor-not-allowed bg-primary/80' : ''} transition
            flex flex-row gap-x-1.5 justify-center items-center`}
    >
        <span className={`uppercase font-dm-mono text-sm tracking-widest`}>{ label }</span>
        <Icon size={16}/>
    </button>
)}

export default BlockButton