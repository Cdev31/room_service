import { Schema } from "mongoose";
import { IRoom } from "./interface";




export const roomSchema = new Schema<IRoom>({
    title: {
        type: String,
        required: true,
        minlength: 60
    },
    description: {
        type: String,
        required: true,
        minlength: 130
    },
    reserved: {
        type: Boolean,
        required: true,
        default: false
    },
    address: {
       type: String,
       required: true 
    },
    department: {
        type: String,
        required: true 
    },
    city: {
        type: String,
        required: true 
    },
    postalCode: {
        type: String,
        required: true 
    },
    host: {
        type: String,
        required: true,
        ref: 'Users'
    },
    maxDays: {
        type: Number,
        max: 20,
        min: 1
    },
    images: [
        {
            id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true   
            }
        }
    ]
})

