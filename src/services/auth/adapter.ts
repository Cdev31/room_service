import { IAuthServices, response } from "./interface";
import { Model } from '../../db/libs/connecion'
import { IUser } from "../../db/models/users";
import { config } from "../../config/config.env";
import { createJwt } from "../../utils/generate.jwt";


export class AuthAdapter implements IAuthServices {

    login( user: any )  {
        const payload = {
            userId: user.id,
            email: user.email
           }
           const token = createJwt(payload, config.jwtSecret)
    
           return token
    }

    async register( user: Omit<IUser, 'google' | 'emailVerify'| 'photo' | 'userType'> ): Promise<response> {

        const existsUser = await Model.userModel.findOne({email: user.email})

        if ( existsUser !== null ) return {
            error: 'email invalid',
            status: 400,
            response: [],
            message: 'User with email exits'
        }

        const newUser = await Model.userModel.create( user )
        
        delete newUser.password
        delete newUser.firstName
        delete newUser.lastName

        return {
            error: null,
            status: 201,
            response: newUser,
            message: 'User Created'
        }
        
    }
    changePasword(): void {
        throw new Error("Method not implemented.");
    }
    
}