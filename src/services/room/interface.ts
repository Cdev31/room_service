


export interface IRoomServices {

    create( room: object ): void

    findByHost( id:string ): void

    find( term: string): void

    update( changes: object, id: string ): void

    delete( id:string ): void

} 