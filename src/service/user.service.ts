
//internal imports
import {responseErrorType,responseUserType,userInterface} from './../interfaces/user.interface'

class User implements userInterface{

    findUsers(): responseUserType<any> | responseErrorType {
        
    }

    findByPKUser(id: number): responseUserType<any> | responseErrorType{
        try {
            return {
                status:123,
                message: 'Success',
                response: []
            }
        } catch (error) {
            return {
                status: 23,
                error: `Error: ${error}`
            }
        }
     }

     createUser(body: string): responseUserType<any> | responseErrorType {
         
     }

     updateUser(id: number, changes: string): responseUserType<any> | responseErrorType {
         
     }

     deleteUser(id: number): responseUserType<any> | responseErrorType {
         
     }
}

const userService = new User()