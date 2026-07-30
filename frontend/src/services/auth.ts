import axios from "axios"
import { API_URL } from "."

async function signup(email: string, password: string)
    :Promise<{ message: string, success: boolean }> {
    let message = ''
    let success = true
    
    try {
        const response = await axios.post(`${API_URL}/api/user/signup`, { email, password })
        message = response.data.message
    } catch (error: any) {
        success = false
        message = error.response.data.message ?? error.message
    }

    return { message, success }
}

async function login(email: string, password: string):
    Promise<{ message: string, success: boolean, accountStatus: string }> {
    let message = ''
    let success = true

    let accountStatus = ''

    try {
        const response = await axios.post(`${API_URL}/api/user/login`, { email, password })
        message = response.data.message
    } catch (error: any) {
        success = false

        message = error.response.data.message ?? error.message
        accountStatus = error.response.data.accountStatus
    }

    return { message, success, accountStatus }
}

async function resendOTPToEmail(email: string): 
    Promise<{ message: string, success: boolean }> {
    let message = ''
    let success = true

    try {
        const response = await axios.post(`${API_URL}/api/user/send-code`, { email })
        message = response.data.message
    } catch (error: any) {
        success = false
        message = error.response.data.message ?? error.message
    }

    return { message, success }
}

async function verifyCode(email: string, code: string): 
    Promise<{ message: string, success: boolean }> {
    let message = ''
    let success = true

    try {
        const response = await axios.post(`${API_URL}/api/user/verify`, { email, code })
        message = response.data.message
    } catch (error: any) {
        success = false
        message = error.response.data.message ?? error.message
    }

    return { message, success }
}

export { signup, login, resendOTPToEmail, verifyCode }