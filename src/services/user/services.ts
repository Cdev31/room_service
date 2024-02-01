import { IUserServices } from "./interface";


export class UserServices {

    constructor( 
        private readonly Adapter: IUserServices
     ){}

    async findByEmail(){
        return this.Adapter.findByEmail()
    }
    
    async find(){
        return this.Adapter.find()
    }

}