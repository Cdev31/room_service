import { Router, Request, Response, NextFunction } from 'express'
import passport from 'passport'
import { AuthServices } from '../services/auth/services'
import { AuthAdapter } from '../services/auth/adapter'
import { validateData } from '../middleware/validator.schema'
import { LoginUserSchema, RegisterUserSchema } from '../schemas/auth.schema'


const authServices = new AuthServices( new AuthAdapter() )

export const authRouter = Router()

authRouter.post('/login',
validateData('body', LoginUserSchema),
passport.authenticate('local', { session: false }),
async ( req: Request , res: Response, next: NextFunction )=>{
    try {
        const response = authServices.login( req.user )
        res.status(200).json(response)
    } catch (error) {
        next(error)
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