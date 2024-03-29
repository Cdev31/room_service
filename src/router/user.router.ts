import { NextFunction, Router, Request, Response } from 'express'
import { UserServices } from '../services/user/services'
import { UserAdapter } from '../services/user/adapter'
import passport from 'passport'

const userServices = new UserServices( new UserAdapter() )

export const userRouter = Router()

userRouter.use( passport.authenticate('jwt', { session: false }) )

userRouter.get('/',
async (_: Request, res: Response, next: NextFunction )=>{ 
    try {
        const response = await userServices.find()
        res.status(200).json(response)
    } catch (error) {
        next( error )
    }
})

userRouter.get('/profile/:id', 
async ( req: Request, res: Response, next: NextFunction )=>{ 
    try {
        const { status, response, error, message } = await userServices.findById( req.params.id )
        res.status(status).json({
            response: response,
            error: error,
            message: message
        })
    } catch (error) {
        next( error )
    }
})

userRouter.patch('/change-host/:id', async ( req: Request, res: Response, next: NextFunction )=>{ 
    try {
        const { status, message, response, error } = await userServices.changeTypeHost( req.params.id )
        res.status( status ).json({
            response: response,
            message: message, 
            error: error
        })
    } catch (error) {
        next( error )
    }
})

