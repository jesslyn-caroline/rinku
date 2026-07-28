import express from 'express'
import { validateUserData } from '../middlewares/userMiddleware'
import { login, sendCode, signup, verifyCode } from '../controllers/userController'

const router = express.Router()

router.post('/user/signup', validateUserData, signup)
router.post('/user/login', login)
router.post('/user/send-code', sendCode)
router.post('/user/verify', verifyCode)

export default router