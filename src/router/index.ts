import { Router, Application } from "express";
import { authRouter } from "./auth.router";
import { roomRouter } from "./room.router";



export function routerApp( app: Application  ){
    const router = Router()
    router.use('/auth', authRouter)
    router.use('/room', roomRouter)
    app.use('/api/v1', router )
}