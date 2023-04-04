import jwt from 'jsonwebtoken' 

//internal imports
import {config} from '../../config/config'
import { Users } from '../../db/models/user.model'

export const createToken = (user:Users): string=>{
    const payload = {
        id: user.dataValues.userId,
        role: user.dataValues.role
    }
    const token:string = jwt.sign(payload,config.jwtSecret,{expiresIn: '1h'})
    return token
}

