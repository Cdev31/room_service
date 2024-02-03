import { CreateRoomSchema } from "../../schemas/room.schema"


interface response {
    message?: string | null
    error?: string | null
    response: any
    status: number
}

export interface IRoomServices {

    create( room: CreateRoomSchema ): Promise<response>

    findByHost( id:string ): void

    find( term?: string): Promise<response>

    update( changes: object, id: string ): void

    delete( id:string ): void

} 