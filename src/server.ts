import Express, { Response } from 'express'
import cors from 'cors'
import { config } from './config/config.env'
import { routerApp } from './router'
import { loaderDB } from './db/libs/connection'
import { handlerConsoleError, handlerErrorSever, handlerMongoError } from './middleware/error.handler'
import './utils/strategy'

loaderDB()

const app = Express()
app.use( Express.json() )
app.use( cors( ) )

app.get('/', (_, res: Response)=>{
    res.status(200).json({
        greeting: 'hello'
    })
})

routerApp( app )
app.use( handlerConsoleError )
app.use( handlerErrorSever )
app.use( handlerMongoError )

app.listen( config.port, ()=>{
    config.env === 'dev' && console.log(`http://locahost:${ config.port }`)
})