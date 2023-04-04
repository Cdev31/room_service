
import { Rooms } from "../db/models/room.model";
import { responseType } from "../interfaces/response";
import { roomInterface,Query, roomAttributes, changesRoom } from "../interfaces/room.interface";


class Room implements roomInterface{

    async findRooms(query: Query) {
        
    }

    async findByPkRoom(roomId: number){
        
    }

    async createRoom(userId: number, body: roomAttributes) {
        
    }

    async updateRoom(roomId: number, changes: changesRoom) {
        
    }

    async deletRoom(roomId: number) {
        
    }
}

export const roomService: Room = new Room()