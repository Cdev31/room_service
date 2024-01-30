import { Schema } from "mongoose";
import { IReservation } from "./interface";




export const reservationSchema = new Schema<IReservation>({
    host: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Users' 
    },
    customer: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Users' 
    },
    room: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Rooms' 
    },
    date: {
        entryDate: {
            type: Date,
            required: true
        },
        departureDate: {
            type: Date,
            required: true   
        }
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    },
    total: {
        type: Number,
        required: true
    }
})