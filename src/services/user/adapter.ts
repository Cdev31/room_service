import { IUserServices } from "./interface";
import { Model } from '../../db/libs/connecion'


export class UserAdapter implements IUserServices {

    async changeTypeHost( id: string ) {

        const user = await Model.userModel.findById(id)

        if ( user === null ) 
        return {
            status: 404,
            response: [],
            message: null,
            error: 'User not found'
        }

        await user.updateOne({
            userType: 'Host'
        })
        
        return {
            status: 200,
            response: user,
            message: 'User updated',
            error: null
        }
    }
    
    findByEmail(): void {
        throw new Error("Method not implemented.");
    }

    async find() {
        const users = await Model.userModel.find().select('-password -firstName -lastName')
        return users
    }

}