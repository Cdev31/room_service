import passport from 'passport';
//internal imports
import {Router,Request,Response, NextFunction} from 'express'
import { validateSChema } from '../middleware/validator.handler';
import { createRoomSchema, findByPkRoomSchema, queryFindRoomSchema, updateRoomByPkSchema } from '../schemas/room.schema';
import {roomService} from '../service/room.service'
import {uploadRoom,uploadImageRoom} from '../middleware/images.handler'

export const roomRouter = Router()

roomRouter.get('/',
validateSChema(queryFindRoomSchema,'query'),
async(req:Request,res:Response,next: NextFunction)=>{
    try {
        const {status,message,response} = await roomService.findRooms(req.query)
        res.status(status).json({
            message: message,
            response: response
        })
    } catch (error) {
        next(error)
    }
});

roomRouter.get('/:id',
validateSChema(findByPkRoomSchema,'params'),
async(req:Request,res:Response,next: NextFunction)=>{
    try {
        const {status,message,response} = await roomService.findByPkRoom(req.params.id)
        res.status(status).json({
            message:message,
            response: response
        })
    } catch (error) {
        next(error)
    }
});

roomRouter.post('/',
passport.authenticate('jwt',{session:false}),
uploadRoom.array('photos'),
validateSChema(createRoomSchema,'body'),
uploadImageRoom(),
async(newRoom:any,_:Request,res:Response,next: NextFunction)=>{
    try {
        const {status,message,response} = await roomService.createRoom(newRoom)
        res.status(status).json({
            message: message,
            response: response
        })
       
    } catch (error) {
        next(error)
    }
});

roomRouter.patch('/:id',
passport.authenticate('jwt',{session:false}),
validateSChema(findByPkRoomSchema,'params'),
validateSChema(updateRoomByPkSchema,'body'),
async(req:Request,res:Response,next: NextFunction)=>{
    try {
        const {status,message,response} = await roomService.updateRoom(req.params.id,req.body)
        res.status(status).json({
            message: message,
            response: response
        })
    } catch (error) {
        next(error)
    }
});

roomRouter.delete('/:id',
passport.authenticate('jwt',{session:false}),
validateSChema(findByPkRoomSchema,'params'),
async(req:Request,res:Response,next: NextFunction)=>{
    try {
        const {status,message,response} = await roomService.deletRoom(req.params.id)
        res.status(status).json({
            message: message,
            response: response
        })
    } catch (error) {
        next(error)
    }
});
