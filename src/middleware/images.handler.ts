import multer, {StorageEngine } from "multer"

import {Request,Response,NextFunction} from 'express'
import {validateToken} from '../utils/validator/generate.token'
import { JwtPayload } from "jsonwebtoken"


const storageUser: StorageEngine = multer.diskStorage({
    destination: async (req:Request,file,cb)=>{
        cb(null,'src/public/imgUser')
    },
    filename: (req:Request,file,cb)=>{
        const ext = file.originalname.split('.').pop()
        cb(null,`${Date.now()}.${ext}`)
    }
})



const storageRoom  = multer.diskStorage({         
    destination: async (req: Request,file,cb)=>{
        cb(null,'src/public/imgRoom')
    },
    filename: (req:Request,file,cb)=>{
        const ext = file.originalname.split('.').pop()
        cb(null,`${Date.now()}.${ext}`)
    }
})


export const uploadImageRoom = ()=>{
        return (req:Request,_:Response,next:NextFunction)=>{
            let newRoom

            const token = req.headers.authorization?.slice(7)

            let images:Express.Multer.File[] = []


            if(req.files instanceof Array){
                images = req.files
            }

            if(token){

            const payload:JwtPayload | string = validateToken(token) 

            if(typeof(payload) == 'object'){
                newRoom = {
                    ...req.body,
                    country:payload.country ,
                    user: payload.id ,
                    imageRoom: [
                        `http://localhost:3000/imgRoom/${images[0].filename}`,
                        `http://localhost:3000/imgRoom/${images[1].filename}`,
                        `http://localhost:3000/imgRoom/${images[2].filename}`
                    ]
                }
            }
        }
            next(newRoom)
    }
}



export const uploadUser = multer({storage: storageUser})
export const uploadRoom = multer({storage: storageRoom})