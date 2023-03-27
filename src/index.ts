import Express from 'express'

//internal imports
import {config} from './config/config'
import {ApiRouter} from './router/index.router'

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