import dotenv from "dotenv"

dotenv.config()

export const DATABASE_URL: string = process.env.DATABASE_URL || ""

export const JWT_SECRET: string = process.env.JWT_SECRET || ""

export const USER: string = process.env.USER || ""

export const PASS: string = process.env.PASS || ""

export const SALT_ROUNDS: number = Number(process.env.SALT_ROUNDS)