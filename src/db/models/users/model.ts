import { Schema } from "mongoose";
import { Gender, IUser, UserType } from "./interface";


export const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true,
        minlength: 3
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3
    },
    displayName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: Object.values( Gender ),
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    google: {
        type: Boolean,
        required: false,
        default: false,
    },
    userType: {
        type: String,
        enum: Object.values(UserType),
        default: UserType.Normal
    },
    photo: {
        type: String,
        required: false
    },
    biografy: {
        type: String,
        minlength: 150,
        required: true
    },
    emailVerify: {
        type: Boolean,
        required: true,
        default: false
    },
    privateInformation: {
        dui: {
            type: String,
            required: true,
        },
        personalPhone: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            minlength: 50,
            required: true
        },
        dateOfBirth: {
            type: Date,
            required: true,
        }
    }
})