import mongoose from "mongoose"

const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: Schema.Types.String,
        required: true
    },
    password: {
        type: Schema.Types.String,
        required: true
    },
    isVerified: {
        type: Schema.Types.Boolean,
        required: true,
        default: false
    }
}, { timestamps: false })

const UserModel = mongoose.model("user", UserSchema)

interface TUser {
    email: string,
    password: string,
    isVerified: boolean
}

export { UserModel, type TUser }