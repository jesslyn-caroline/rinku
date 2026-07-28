import { Link } from "react-router-dom"
import InputField from "../components/fields/InputField"
import BlockButton from "../components/buttons/BlockButton"
import { RiArrowRightLine } from "@remixicon/react"
import useAuth from "../hooks/useAuth"

function Signup() {
    const { email, password, confirmPassword, loading, emailC, passwordC, confirmPasswordC, createAccount } = useAuth()

    return (
    <div className={`w-full mt-24 flex justify-center`}>
        <div className={`max-w-102 w-full flex flex-col gap-y-4 px-4`}>
            <div className={`flex flex-row`}>
                <Link to="/login" className={`w-full py-3 uppercase font-dm-mono text-secondary text-xs tracking-widest border border-text/12 flex justify-center`}>
                    Log in
                </Link>
                <Link to="/signup" className={`w-full py-3 uppercase font-dm-mono bg-primary text-white text-xs tracking-widest border border-primary flex justify-center`}>
                    Signup
                </Link>
            </div>
            <InputField label="Email" placeholder="Enter your email" type='email' id='email' value={email} onChange={emailC} disabled={loading} />
            <InputField label="Password" placeholder="Enter your password" type='password' id='password' value={password} onChange={passwordC} disabled={loading} />
            <InputField label="Confirm Password" placeholder="Confirm your password" type='password' id='confirm-password' value={confirmPassword} onChange={confirmPasswordC} disabled={loading}/>
            <div className={`my-1`}/>
            <BlockButton label="Create Account" Icon={RiArrowRightLine} onClick={createAccount} disabled={loading}/>
        </div>
    </div>
)}

export default Signup