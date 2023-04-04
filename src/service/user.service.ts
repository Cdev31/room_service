import {} from 'sequelize'
//internal imports
import {changeUser,Query,UserAtributtes,userInterface} from './../interfaces/user.interface'
import {Users} from '../db/models/user.model'
import {createHash,validateHash} from '../utils/validator/encryp.hash'
import {createToken} from '../utils/validator/generate.token'




class User implements userInterface{

    async findUsers(query:Query){
       
        const options: {limit?:number,offset?:number,where:{role?:string}}= {
            where: {}
        }

        const {limit,offset,role}:Query = query

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

    async findByPKUser(id: string){
            const response = await Users.scope('default').findByPk(id)
            
            return {
                status: 200,
                message: 'Success',
                response: response
            }
        
    }

    async registerUser(body: UserAtributtes){
            const {password} = body
            const response = await Users.scope('default').create(
                {
                    ...body,
                    password: await createHash(password)
                }
            )
            return {
                status: 201,
                message: 'Success',
                response: response
            }
       
        
    }

    async loginUser(email: string,password:string) {
            const user = await Users.scope('login').findOne({
                where: {email: email}
            })

            let isPassword;
            if (user){
                const validate = await validateHash(password,user.dataValues.password)
                await this.updateUser(user.dataValues.userId,{recoveryToken: createToken(user)})
                isPassword = validate
            }

            if(isPassword == true){
                return {
                    status: 200,
                    message: 'Success',
                    response: user?.dataValues.recoveryToken
                }
            }else {
                return {
                    status: 400,
                    message: 'Invalid password'
                }
            }
    }
    
    async updateUser(id: number, changes:changeUser ){
        const user = await Users.scope('default').findByPk(id)
            if(user === null){
                return {
                    status: 404,
                    message: 'Not Found'
                }
            }
        const response = await user.update(changes)
                return {
                    status: 200,
                    message: 'Success',
                    response: response
                }
    }

    async changePassword(id:number,password: string){
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
                response: true
           }   
    }

    async deleteUser(id: string){
        const user = await this.findByPKUser(id)
            if(typeof(user) != 'undefined' && user != null){
                const response = await Users.destroy({where: user.response?.dataValues.userId})
                return {
                    status: 201,
                    message: 'Success',
                    response: response
                }
            }
        return {
                status: 404,
                message: 'Not found',
            }
    }
}

export const userService:User = new User()