import type { Request, Response } from "express"
import * as jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { type TUser, UserModel } from "../models/UserModel"
import { VerificationCodeModel } from "../models/VerificationCodeModel"
import { JWT_SECRET, SALT_ROUNDS } from "../utils/env"
import { sendVerificationCode } from "../utils/sendEmail"
import { generateCode } from "../utils/generateCode"

async function login(req: Request, res: Response) {
    const { email, password } = req.body

    try {
        const user = await UserModel.findOne({ email })

        if (!user) {
            return res.status(404).json({
                message: "Could not find user with this email.",
                accountStatus: "not-created"
            })
        }

        if (!user.isVerified) {
            return res.status(401).json({
                message: "Email is not verified.",
                accountStatus: "unverified",
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(401).json({
                message: "Password not match.",
                accountStatus: "password-not-match"
            })
        }

        const token = jwt.sign(user.email, JWT_SECRET, { expiresIn: "30d" })

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 1000 * 60 * 60 * 24 * 30
        })

        res.status(200).json({
            message: "Login successful.",
            data: { token },
        })

    } catch (error: any) {
        res.status(500).json({
            message: "Internal server error.",
        })    
    }
}

async function signup(req: Request, res: Response) {
    const { email, password } = req.body as unknown as TUser

    try {
        const user: TUser | null = await UserModel.findOne({ email })

        if (user && user.isVerified) {
            return res.status(409).json({
                message: "An account has already been created using this email.",
            })
        }

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)

        await UserModel.updateOne(
            { email },
            { email, password: hashedPassword },
            { upsert: true }
        )
        
        sendCode(req, res)

    } catch (error: any) {
        res.status(500).json({
            message: error.message,
        })
    }
}

async function sendCode(req: Request, res: Response) {
    const { email } = req.body

    try {
        const code = generateCode()
        
        await VerificationCodeModel.updateOne(
            { email }, 
            { email, code, expiresAt: Date.now() + 1000 * 60 * 10 },
            { upsert: true }
        )

        sendVerificationCode(email, code)
        
        res.status(200).json({
            message: "Verification code sent to your email.",
        })

    } catch (error: any) {
        res.status(500).json({
            message: "Internal server error.",
        })
    }
}

async function verifyCode(req: Request, res: Response) {
    const { email, code } = req.body

    try {
        const verification = await VerificationCodeModel.findOne({ email })

        if (!verification) {
            return res.status(400).json({
                message: "Could not find verification code.",
            })
        }

        if (verification.code !== code) {
            return res.status(400).json({
                message: "Wrong verification code.",
            })
        }
        
        if (verification.expiresAt!.getTime() < Date.now()) {
            return res.status(400).json({
                message: "Verification code expired.",
            })
        }

        await UserModel.updateOne(
            { email },
            { isVerified: true }
        )

        await VerificationCodeModel.updateOne(
            { email },
            { verifiedAt: Date.now() }
        )

        res.status(200).json({
            message: "Verification successful. Login to continue.",
        })

    } catch (error: any) {
        res.status(500).json({
            message: "Internal server error.",
        })
    }
}

export { login, signup, sendCode, verifyCode }