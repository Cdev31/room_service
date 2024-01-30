import { Mongoose } from "mongoose";
import { IRoom, roomSchema } from "./rooms";
import { IUser, userSchema } from "./users";
import { IReservation, reservationSchema } from "./reservation";




export const createSchemas = ( mongoose: Mongoose )=>{
    return {
        roomModel: mongoose.model<IRoom>( 'Rooms', roomSchema ),
        userModel: mongoose.model<IUser>( 'Users', userSchema ),
        reservationModel: mongoose.model<IReservation>( 'Reservations', reservationSchema )
    }
}