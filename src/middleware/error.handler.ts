import {ValidationError} from 'sequelize'
import {Request,Response,NextFunction} from 'express'

export function logErros(err:Error,req:Request,res:Response,next:NextFunction){
    console.log(err)
    next(err)
}

export function errorHandler(err:Error,req:Request,res:Response,next:NextFunction){
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
}

export function ormErrorHandler(err:Error,req:Request,res:Response,next:NextFunction){
    if(err instanceof ValidationError){
        console.log(err)
        res.status(409).json({
            statusCode: 409,
            message: err.name,
            errors: err.errors
        })
    }
    next(err);
}
