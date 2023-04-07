import { Rooms } from "../db/models/room.model";
import { roomInterface,Query, roomAttributes, changesRoom } from "../interfaces/room.interface";


class Room implements roomInterface{

    async findRooms(query: Query) {

        const {limit,offset,max_price,min_price} = query
        const options: {limit?:number,offset?:number,where:{min_price?:number,max_price?:number}} = {
            where: {}
        }

        if(limit && offset ){
            options.limit = limit
            options.offset = offset
        }
        if(min_price && max_price){
            options.where.min_price = min_price
            options.where.max_price = max_price
        }

        const response = await Rooms.findAll(options)
        return {
            status: 200,
            message: 'Success',
            response: response
        }
    }

    async findByPkRoom(roomId: string){
        const response = await Rooms.findByPk(roomId)
        if(response != null){
            return {
                status: 200,
                message: 'Succes',
                response: response
            }
        }
        return{
            status: 404,
            message: `User with id: ${roomId} not found`
        }
    }

    async createRoom(body:any) {
         const response = await Rooms.create(body)
        return {
            status: 201,
            message: 'Created',
            response:response
        }
    }

    async updateRoom(roomId: string, changes: changesRoom) {
        const room = await this.findByPkRoom(roomId)
        const response = await room.response?.update(changes)   
        if(response != undefined){
            return {
                status: 200,
                message: 'Succes',
                response: response
            }
        }
        return {
            status: 400,
            message: "There's a problem, not updated the information of room"
        }
    }

    async deletRoom(roomId: string) {
        const room = await this.findByPkRoom(roomId);
        
        if (room.response != undefined){
            room.response.destroy()
            return {
                status: 200,
                message: 'Success',
                response: true
            }
        }
        return {
            status: 400,
            message: 'Room deleted is failed'
        }
    }
}

export const roomService: Room = new Room()