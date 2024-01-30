import Express, { Response } from 'express'
import { config } from './config/config.env'
import { routerApp } from './router'
import { loaderDB } from './db/libs/connecion'

loaderDB()

const app = Express()

app.get('/', (_, res: Response)=>{
    res.status(200).json({
        greeting: 'hello'
    })
})

routerApp( app )

app.listen( config.port, ()=>{
    config.env === 'dev' && console.log(`http://locahost:${ config.port }`)
})