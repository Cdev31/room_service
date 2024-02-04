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
    
    async findByEmail( email: string ) {
        const user = await Model.userModel.findOne({ 
            email: email
        })
        if( user === null ) return { 
            response: [],
            status: 404,
            error: 'User not found',
            message: null
        }
        return {
            response: user,
            status: 200,
            error: null,
            message: 'Success'
        }
    }

    async find() {
        const users = await Model.userModel.find().select('-password -firstName -lastName')
        return users
    }

}