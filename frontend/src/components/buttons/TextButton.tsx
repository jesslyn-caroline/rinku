import type { RemixiconComponentType } from "@remixicon/react"

interface Props {
    label: string,
    Icon: RemixiconComponentType,
    onClick: () => void,
    disabled?: boolean
}

function TextButton({ label, Icon, onClick, disabled }: Props) {
    return (
    <button 
        disabled={disabled}
        onClick={onClick}
        className={`
            w-fit py-3 text-secondary
            ${disabled ? 'cursor-not-allowed' : ''} transition
            flex flex-row gap-x-2 justify-center items-center`}
    >
        <Icon size={16}/>
        <span className={`uppercase font-dm-mono text-sm tracking-wider`}>{ label }</span>
    </button>
)}

export default TextButton