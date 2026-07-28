import React from "react"
import nodemailer from 'nodemailer'
import { render } from "@react-email/render"
import { PASS, USER } from './env'
import Email from '../emails/Email'

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: USER, pass: PASS },
})

async function sendVerificationCode(email: string, code: string) {
    const html = await render(<Email code={code} />)

    await transporter.sendMail({
        from: `Rinku <${USER}>`,
        to: email,
        subject: "[ Rinku ] Account Verification Code",
        html
    })
}

export { sendVerificationCode }