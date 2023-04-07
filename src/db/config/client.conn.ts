import {Pool,Client, PoolClient} from 'pg'

//internal imports
import {config} from '../../config/config'

export const PoolConn = async (): Promise<void>=>{
    const pool:Pool = await new Pool({
        connectionString: `${config.db_url}`
    })
    pool.on('error',(error): void=>{
      console.log(`Error is ${error}`)
    })
    pool.on('connect',(client:PoolClient): void=>{
        console.log('pool conected')
    })
}

export const ClientConn = async(): Promise<void>=>{
    const client:Client = await new Client({
        connectionString: `${config.db_url}`
    })
    await client.connect((err:Error):void=>{
        if(err){
            console.error(`Error: ${err.stack}`)
        }else{
            console.log('Connected')
        }
    })
}