import { IAuthServices } from "./interface";


export class AuthServices {

    constructor(
        private readonly Adapter: IAuthServices
    ){}

    async login(){
        return this.Adapter.login()
    }

    async register( user: any ){
        return this.Adapter.register( user )
    }

    async changePassword(){
        return this.Adapter.changePasword()
    }

}