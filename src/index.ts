import Express from 'express'

//internal imports
import {config} from './config/config'
import {ApiRouter} from './router/index.router'
import { prob} from './db/config/sequelize.conn'
import {logErros,errorHandler,ormErrorHandler} from './middleware/error.handler'

prob()
const app = Express()
app.use(Express.json())

app.get('/',(req,res)=>{
    res.json({
        message: "hello my api"
    })
})

ApiRouter(app)
app.use(logErros)
app.use(ormErrorHandler)
app.use(errorHandler)

app.listen(config.port,()=>{
    console.log(`Api in port ${config.port}`)
})