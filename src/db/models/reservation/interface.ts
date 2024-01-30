import { Schema } from "mongoose"

export interface IDate {
    entryDate: Date
    departureDate: Date
}


export interface IReservation {
    host: Schema.Types.ObjectId
    room: Schema.Types.ObjectId
    date: IDate
    customer: Schema.Types.ObjectId
    status: boolean
    total: number
}