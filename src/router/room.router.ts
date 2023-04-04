import {Router,Request,Response, NextFunction} from 'express'
import { validateSChema } from '../middleware/validator.handler';
import { createRoomSchema, findByPkRoomSchema, queryFindRoomSchema, updateRoomByPkSchema } from '../schemas/room.schema';

export const roomRouter = Router()

roomRouter.get('/',
validateSChema(queryFindRoomSchema,'query'),
async(req:Request,res:Response,next: NextFunction)=>{
    try {
        
    } catch (error) {
        next(error)
    }
});

roomRouter.get('/:id',
validateSChema(findByPkRoomSchema,'params'),
async(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        
    }
});

roomRouter.post('/',
validateSChema(createRoomSchema,'body'),
async(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        
    }
});

roomRouter.patch('/',
validateSChema(findByPkRoomSchema,'params'),
validateSChema(updateRoomByPkSchema,'body'),
async(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        
    }
});

roomRouter.delete('/',
validateSChema(findByPkRoomSchema,'params'),
async(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        
    }
});
