import mongoose  from "mongoose"

const Schema = mongoose.Schema

const VerificationCodeSchema = new Schema({
    email: {
        type: Schema.Types.String,
        required: true
    },
    code: {
        type: Schema.Types.String,
        required: true
    },
    verifiedAt: {
        type: Schema.Types.Date,
        required: false,
        default: null
    },
    expiresAt: {
        type: Schema.Types.Date,
        required: false,
        default: Date.now() + 1000 * 60 * 10 // 10 minutes
    }
}, { timestamps: true })

const VerificationCodeModel = mongoose.model("verificationCode", VerificationCodeSchema)

interface TVerificationCode {
    email: string,
    code: string,
    verifiedAt?: Date,
    expiresAt: Date
}

export { VerificationCodeModel, type TVerificationCode }