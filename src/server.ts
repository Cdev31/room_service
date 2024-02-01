import Express, { Response } from 'express'
import { config } from './config/config.env'
import { routerApp } from './router'
import { loaderDB } from './db/libs/connecion'
import { handlerConsoleError, handlerErrorSever, handlerMongoError } from './middleware/error.handler'

loaderDB()

const app = Express()
app.use( Express.json() )

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