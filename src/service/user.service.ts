import {} from 'sequelize'
//internal imports
import {changeUser,responseUserType,UserAtributtes,userInterface} from './../interfaces/user.interface'
import {Users} from '../db/models/user.model'

interface Query {
    limit?:number
    offset?: number
    where: {
        role?: string
    }
}

class User implements userInterface{

    async findUsers(query:any): Promise<any> {
       
        const options: Query= {
            where: {}
        }

        const {limit,offset,role} = query

        if(limit && offset){
            options.limit = limit
            options.offset = offset
        }

        if(role){
            options.where.role = role
        }        

        const response = await Users.scope('default').findAll(options)
        return {
            status: 200,
            message: 'Success',
            response: response
        }   
    }

    async findByPKUser(id: string): Promise<any>{
            const response = await Users.scope('default').findByPk(id)
            
            return {
                status: 200,
                message: 'Success',
                response: response
            }
        
    }

    async registerUser(body: UserAtributtes): Promise<any>{
            const response = await Users.scope('default').create(body)
            return {
                status: 201,
                message: 'Success',
                response: response
            }
       
        
    }

    async loginUser(email: string,password:string): Promise<any> {
            const response = await Users.scope('login').findOne({
                where: {email: email}
            })
            return {
                status: 201,
                message: 'Success',
                response: response
            }
    }
    
    async updateUser(id: number, changes:changeUser ): Promise<any>  {
        try {
            const user = await Users.scope('default').findByPk(id)
            if(user === null){
                return {
                    statud: 404,
                    message: 'Not Found'
                }
            }
            const response = await user.update(changes)
                return {
                    status: 200,
                    message: 'Success',
                    response: response
                }
        } catch (error) {
            return error
        }   
    }

    async changePassword(id:number,password: string): Promise<any>{
        try {
            const user = await Users.findByPk(id)
            if (user === null){
                return {
                    status: 404,
                    message: 'Not Found'
                }
            }
            const response = user.update({
                password: password
            })
            return {
                status: 201,
                message: 'Success',
                response: response
            }
        } catch (error) {
            return error   
        }
    }

    async deleteUser(id: string): Promise<any> {
        try {
            const user = await this.findByPKUser(id)
            const response = await Users.destroy(user.response)
            return {
                status: 201,
                message: 'Success',
                response: response
            }
        } catch (error) {
             return error
        }
    }
}

export const userService:User = new User()