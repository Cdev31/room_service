import 'dotenv/config'
import { IConfig } from "./config.interface";
import { validationEnv } from "./validation.env";




export const config: IConfig = {
    env: process.env.ENV || 'dev',
    port: parseInt(process.env.PORT || '3000'),
    dbUrl: process.env.DB_URL,
    jwtSecret: process.env.JWT_SECRET || ''
}

validationEnv( config )