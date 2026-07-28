import express from 'express'
import { validateUserData } from '../middlewares/userMiddleware.ts'
import { login, sendCode, signup, verifyCode } from '../controllers/userController.ts'

const router = express.Router()

router.post('/user/signup', validateUserData, signup)
router.post('/user/login', login)
router.post('/user/send-code', sendCode)
router.post('/user/verify', verifyCode)

export default router