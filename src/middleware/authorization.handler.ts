import { Request,Response,NextFunction } from "express"
import {validateToken} from '../utils/validator/generate.token'

export const authHandler = (role: string)=>{
    return (req:Request,res:Response,next:NextFunction)=>{

        const token = req.headers.authorization?.slice(7)

        if(typeof(token) == 'string'){
            const payload = validateToken(token)

            if(typeof(payload) == 'object'){

                payload.role == role ? next() : res.status(400).json({
                    message: 'Unauthorized, insufficient roles '

                }) 
                
            } 
        }
    }
}