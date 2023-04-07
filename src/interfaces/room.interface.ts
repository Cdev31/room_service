import { Rooms } from "../db/models/room.model";
import { responseType } from "./response";

export type Query = {
    limit?: number
    offset?: number
    min_price?: number
    max_price?: number 
  
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

    findByPkRoom(roomId: string):Promise<responseType<Rooms>> 

    // createRoom(image: string[],body:roomAttributes):Promise<responseType<Rooms>>

    updateRoom(roomId:string,changes:changesRoom ): Promise<responseType<Rooms>>

    deletRoom(roomId:string): Promise<responseType<boolean>>
}