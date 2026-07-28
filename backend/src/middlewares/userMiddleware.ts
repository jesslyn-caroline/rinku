import type { Request, Response, NextFunction } from "express"
import * as Yup from "yup"
import type { TUser } from "../models/UserModel"

const userValidation = Yup.object({
    email: Yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),
    password: Yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    isVerified: Yup
        .boolean()
        .default(false)
})

async function validateUserData(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body as unknown as TUser

    try {
        await userValidation.validate({ email, password })
        next()
    } catch (error: any) {
        return res.status(400).json({
            message: error.message,
            data: null
        })
    }
}

export { validateUserData }