import {Sequelize} from 'sequelize'

//internal imports
import {config} from '../../config/config'
import {setupModel} from '../models/index.model'

export const sequelize = new Sequelize(`${config.db_url}`,{
    dialect: 'postgres',
    pool: {
        max: 23,
        idle: 10000,
        evict:15000
    },
    logging: console.log
})


export const prob = async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection success')
        sequelize.query('select * from categories')
    } catch (error) {
        console.error(`Error:  ${error}`)
    }
}

setupModel(sequelize)