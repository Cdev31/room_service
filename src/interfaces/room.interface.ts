import { Rooms } from "../db/models/room.model";
import { responseType } from "./response";

export type Query = {
    limit?: number
    offset?: number
    where: {
        min_price?: number
        max_price?: number 
    }
}

export type roomAttributes = {
    tittle: string
    description:string
    startDate: Date
    finishDate: Date
    photos: string[]
    price: number
    user: number
    status: 'Rented' | 'Not Rented'
}

export type changesRoom = Partial<Omit<roomAttributes,'user'>>

export interface roomInterface{

    findRooms(query:Query): Promise<responseType<Rooms[]>>

    findByPkRoom(roomId: number):Promise<responseType<Rooms>> 

    createRoom(userId:number,body:roomAttributes):Promise<responseType<Rooms>>

    updateRoom(roomId:number,changes:changesRoom ): Promise<responseType<Rooms>>

    deletRoom(roomId:number): Promise<responseType<boolean>>
}