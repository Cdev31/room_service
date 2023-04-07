import Express, {Request,Response,NextFunction} from 'express'
import path from 'path'
//internal imports
import {config} from './config/config'
import {ApiRouter} from './router/index.router'
import { prob} from './db/config/sequelize.conn'
import {logErros,errorHandler,ormErrorHandler} from './middleware/error.handler'
import './utils/strategy/index.strategy'

prob()
const app = Express()
app.use(Express.json())
app.use(Express.static(path.join('src/public')))

app.get('/',(_:Request,res:Response,next:NextFunction)=>{
    try {
        res.render('index')
    } catch (error) {
        next(error)
    }
})

ApiRouter(app)
app.use(logErros)
app.use(ormErrorHandler)
app.use(errorHandler)

app.listen(config.port,()=>{
    console.log(`Api in port ${config.port}`)
})