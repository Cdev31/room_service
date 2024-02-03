
import { CreateRoomSchema } from '../../schemas/room.schema'
import { IRoomServices }  from './interface'


export class RoomServices{

    constructor(  
        private readonly adapter: IRoomServices
    ){}

    async findByHost( id:string ){
        return await this.adapter.findByHost( id )
    }

    async find( term?: string ){
        return await this.adapter.find( term )
    }

    async update( changes: object, id: string ){
        return await this.adapter.update( changes, id )
    }

    async create( room: CreateRoomSchema ){
        return this.adapter.create( room )
    }

    async delete( id:string ){
        return await this.adapter.delete( id )
    }

}