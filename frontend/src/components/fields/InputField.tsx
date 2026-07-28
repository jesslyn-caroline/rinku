interface Props {
    label?: string,
    placeholder?: string,
    type: string,
    id: string,
    value: string | number,
    onChange: (e: any) => void,
    disabled?: boolean
}

function InputField({ label, placeholder='', type, id, value, onChange, disabled=true }: Props) {
    return (
    <div className={`flex flex-col gap-y-2 font-dm-mono`}>
        { label && <label htmlFor={id} className={`uppercase text-sm tracking-widest text-secondary`}>{ label }</label> }
        <input 
            type={type} id={id} placeholder={placeholder} value={value}
            className={`outline-none bg-accent border border-text/12 px-4 py-3 text-sm`}  
            onChange={onChange}
            disabled={disabled}
        />
    </div>
)}

export default InputField