import { Router, Application } from "express";
import { authRouter } from "./auth.router";
import { roomRouter } from "./room.router";
import { userRouter } from "./user.router";



export function routerApp( app: Application  ){
    const router = Router()
    router.use('/auth', authRouter)
    router.use('/room', roomRouter)
    router.use('/user', userRouter )
    app.use('/api/v1', router )
}