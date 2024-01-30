import { Router, Request, Response } from "express";
import { RoomAdapter, RoomServices } from "../services/room";

const roomServices = new RoomServices( new RoomAdapter() )

export const roomRouter = Router()


roomRouter.get('/', ( req: Request, res: Response )=>{
    
})