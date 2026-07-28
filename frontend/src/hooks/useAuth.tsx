import { useState } from "react"
import { login, resendOTPToEmail, signup, verifyCode } from "../services/auth"
import { useLocation, useNavigate } from "react-router-dom"
import showToast from "../components/toasts/Toasts"

function useAuth() {
    const navigate = useNavigate()
    const location = useLocation()

    const [email, setEmail] = useState<string>(location.state?.email || '')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    
    const [otp, setOTP] = useState<string>('')
    const [countDown, setCountDown] = useState<number>(0)

    const [loading, setLoading] = useState<boolean>(false)

    const emailC = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const passwordC = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
    const confirmPasswordC = (e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)

    const onOTPChange = (value: string) => {
        setOTP(value)
        if (value.length === 6) onOTPComplete(value)
    }
    
    const createAccount = async () => {
        if (password !== confirmPassword) return showToast('Passwords do not match!')

        setLoading(true)
        const response = await signup(email, password)

        if (!response.success) showToast(response.message)
        else navigate('/signup/verify', { state: { email } })

        setLoading(false)
    } 

    const resendOTP = async () => {
        setCountDown(10)

        const interval = setInterval(() => {
            setCountDown((countDown) => {
                if (countDown === 0) clearInterval(interval)
                return Math.max(countDown - 1, 0)
            })
        }, 1000)

        const response = await resendOTPToEmail(email)
        showToast(response.message)
    }

    const onOTPComplete = async (otp: string) => {
        if (otp.length !== 6) return

        const response = await verifyCode(email, otp)

        if (!response.success) showToast(response.message)
        else navigate('/login')
    }

    const loginAccount = async () => {
        const response = await login(email, password)

        if (!response.success) showToast(response.message)
        else console.log(response.message)
    }

    return { 
        email, password, confirmPassword, otp, countDown, loading,
        emailC, passwordC, confirmPasswordC, onOTPChange,
        loginAccount, createAccount, resendOTP
    }
}

export default useAuth