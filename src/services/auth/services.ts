import { IUser } from "../../db/models/users";
import { RegisterUserSchema } from "../../schemas/auth.schema";
import { hashPasword } from "../../utils/hash.password";
import { IAuthServices } from "./interface";


export class AuthServices {

    constructor(
        private readonly Adapter: IAuthServices
    ){}

    async login( user: any ){
        return this.Adapter.login( user )
    }

    async register( user: RegisterUserSchema ){
    
        const newUser: Omit<IUser, 'google' | 'emailVerify'| 'photo' | 'userType'> = {
            firstName: user.firstName,
            lastName: user.lastName,
            displayName: user.displayName,
            email: user.email,
            password: hashPasword( user.password ),
            gender: user.gender,
            biografy: user.biografy,
            phone: user.phone,
            privateInformation: user.privateInformation
        }
        
        return this.Adapter.register( newUser )
    }

    async changePassword(){
        return this.Adapter.changePasword()
    }

}