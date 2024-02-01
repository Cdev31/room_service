import { IAuthServices } from "./interface";
import { Model } from '../../db/libs/connecion'
import { IUser } from "../../db/models/users";


export class AuthAdapter implements IAuthServices {

    login(): void {
        throw new Error("Method not implemented.");
    }
    async register( user: IUser ) {

        const newUser = await Model.userModel.create( user ) 
        return newUser
        
    }
    changePasword(): void {
        throw new Error("Method not implemented.");
    }
    
}