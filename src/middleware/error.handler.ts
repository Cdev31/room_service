import { MongooseError } from 'mongoose'
import { Request, Response, NextFunction} from 'express'

export function handlerConsoleError( err: Error, _:Request, res:Response, next: NextFunction ){
    console.log(err)
    next(err)   
}

export function handlerErrorSever( err: Error, _:Request, res:Response, next:NextFunction ){
   
    if(err){
        res.status(500).json({
            err: err.stack,
            message: err.message
        })
    }

}

export function handlerMongoError( err:Error, _:Request,res:Response, next:NextFunction ){
   
    if(err instanceof MongooseError){
        res.status(409).json({
            err: err.name,
            message: err.message
        })
    }   

    next(err)

}