import { CreateRoomSchema } from "../../schemas/room.schema";
import { IRoomServices } from "./interface";
import { Model } from '../../db/libs/connecion'

export class RoomAdapter implements IRoomServices {

    async create( room: CreateRoomSchema ){
       const verifyHost = await Model.userModel.findById( room.host )

       if( verifyHost === null ){
         return {
            message: 'User not found',
            error: null,
            response: [],
            status: 404
         }
       }

       if ( verifyHost?.userType === 'Host'){
        const newRoom = await Model.roomModel.create( room )
        return {
            message: 'Room Created',
            error: null,
            response: newRoom,
            status: 201
        }
     }
     return {
        message: 'The user is not a host',
        error: null,
        response: [],
        status: 401
    }
    }
    
    findByHost(id: string): void {
        throw new Error("Method not implemented.");
    }

    async find( term: string ) {

        const rooms = await Model.roomModel.find({ [`${term}`]: term })

        return {
            message: null,
            error: null,
            status: 200,
            response: rooms
        }
    }

    update(changes: object, id: string): void {
        throw new Error("Method not implemented.");
    }

    delete(id: string): void {
        throw new Error("Method not implemented.");
    }
}