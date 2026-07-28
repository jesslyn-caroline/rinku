import OTPInput from "react-otp-input"
import useAuth from "../hooks/useAuth"
import { RiMailLine } from "@remixicon/react"

function SignupVerify() {
    const { email, otp, countDown, onOTPChange, resendOTP } = useAuth()

    const emailFormat = `${email.slice(0, 2)}***${email.slice(-1 * (email.length - email.indexOf('@')))}`

    return (
    <div className={`w-full h-screen flex justify-center items-center`}>
        <div className={`max-w-90 w-full flex flex-col items-center gap-y-8`}>
            <div className={`w-full p-3 pr-5 flex flex-row justify-between items-between text-secondary font-dm-mono text-sm bg-accent border border-text/12`}>
                <span className={`flex flex-row gap-x-3`}>
                    <RiMailLine size={20}/>
                    <span>Code sent to</span>
                </span>
                <span className={`font-medium`}>{ emailFormat }</span>
            </div>

            <OTPInput value={otp} 
                onChange={(value) => onOTPChange(value)} 
                numInputs={6}  
                renderInput={(props) => <input {...props} /> }
                inputType="number"
                skipDefaultStyles
                containerStyle={`gap-x-4`}
                inputStyle={`size-11 outline-none bg-accent border border-text/12 p-2 text-sm flex justify-center text-center`}
            />

            <div className={`flex flex-row justify-center font-dm-mono text-sm text-secondary ${countDown > 0 ? 'opacity-50 pointer-events-none' : ''}`}>
                <button disabled={countDown > 0 ? true : false} onClick={resendOTP}>
                    Resend code {countDown > 0 ? `(${countDown}s)` : ''}
                </button>
            </div>
        </div>
    </div>
)}

export default SignupVerify