import jwt from 'jsonwebtoken' 

//internal imports
import {config} from '../../config/config'
import { Users } from '../../db/models/user.model'

export const createToken =  (user:Users):string=>{
    const payload = {
        sub: 1,
        id:user.dataValues.userId,
        role: user.dataValues.role,
        country: user.dataValues.country
    }
    const token:string = jwt.sign(payload,config.jwtSecret,{expiresIn: '50min'})
    return token
}

export const validateToken = (token:string)=>{
    const payload = jwt.verify(token,config.jwtSecret)
    return payload
}
