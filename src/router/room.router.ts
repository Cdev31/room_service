import { Router, Request, Response, NextFunction } from "express";
import { RoomAdapter, RoomServices } from "../services/room";
import { validateData } from "../middleware/validator.schema";
import { CreateRoomSchema } from "../schemas/room.schema";
import passport from "passport";

const roomServices = new RoomServices( new RoomAdapter() )

export const roomRouter = Router()


roomRouter.get('/', 
async ( _: Request, res: Response, next: NextFunction )=>{
    try {
        const { status, message, response, error } = await roomServices.find()
        res.status( status ).json({
            response: response,
            message: message,
            error: error
        })

    } catch (error) {
        next(error)
    }
})

roomRouter.get('/:host_id', 
passport.authenticate('jwt', { session: false }),
async ( req: Request, res: Response, next: NextFunction )=>{
    try {
        const { status, message, response, error } = await roomServices.findByHost( req.params.host_id )
        res.status( status ).json({
            response: response,
            message: message,
            error: error
        })

    } catch (error) {
        next(error)
    }
})


roomRouter.post('/', 
validateData( 'body', CreateRoomSchema ),
passport.authenticate('jwt', { session: false }),
async ( req: Request, res: Response, next: NextFunction )=>{
    try {
        const { status, message, response, error } = await roomServices.create( req.body )
        res.status( status ).json({
            response: response,
            message: message,
            error: error
        })
    } catch (error) {
        next(error)
    }

})


