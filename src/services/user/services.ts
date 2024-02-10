import { IUserServices } from "./interface";


export class UserServices {

    constructor( 
        private readonly Adapter: IUserServices
     ){}

    async findByEmail( email: string ){
        return await this.Adapter.findByEmail( email )
    }
    
    async find(){
        return await this.Adapter.find()
    }

    async findById( id: string ){
        return await this.Adapter.findById( id )
    }

    async changeTypeHost( id: string ){
        return this.Adapter.changeTypeHost( id )
    }

}