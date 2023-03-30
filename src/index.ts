import Express from 'express'

//internal imports
import {config} from './config/config'
import {ApiRouter} from './router/index.router'
import { prob} from './db/config/sequelize.conn'
prob()
const app = Express()
app.use(Express.json())

app.get('/',(req,res)=>{
    res.json({
        message: "hello my api"
    })
})

ApiRouter(app)

app.listen(config.port,()=>{
    console.log(`Api in port ${config.port}`)
})