import { Router, Request, Response, NextFunction } from 'express'
import { AuthServices } from '../services/auth/services'
import { AuthAdapter } from '../services/auth/adapter'
import { validateData } from '../middleware/validator.schema'
import { RegisterUserSchema } from '../schemas/auth.schema'

const authServices = new AuthServices( new AuthAdapter() )

export const authRouter = Router()

authRouter.post('/login',
async ( req: Request , res: Response )=>{
    try {
        
    } catch (error) {
        
    }
})


authRouter.post('/register', 
validateData('body', RegisterUserSchema),
async ( req: Request , res: Response, next: NextFunction )=>{
    try {

        const { status, response, message, error } = await authServices.register( req.body )
        res.status(status).json({
            response: response,
            message: message,
            error: error
        })
        
    } catch (error) {
        next( error )
    }
})

authRouter.post('/login-google',
async ( req: Request , res: Response )=>{
    try {
        
    } catch (error) {
        
    }
})


authRouter.post('/register-google', 
async ( req: Request , res: Response )=>{
    try {
        
    } catch (error) {
        
    }
})


authRouter.post('/change-password', async ( req: Request , res: Response )=>{
    try {
        
    } catch (error) {
        
    }
})