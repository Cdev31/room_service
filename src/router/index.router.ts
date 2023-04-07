import {Router} from 'express'

//internal imports
import {userRouter} from './user.router'
import {roomRouter} from './room.router'
import {categoryRouter} from './category.router'

export const ApiRouter = (app: Router)=>{
    const router = Router()
    router.use('/Users', userRouter)
    router.use('/Rooms', roomRouter)
    router.use('/Categories', categoryRouter)
    app.use('/api/v1',router)
}