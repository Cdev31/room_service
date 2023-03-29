import {Sequelize} from 'sequelize'
import {config} from '../../config/config'

export const sequelize = new Sequelize(`${config.db_url}`,{
    dialect: 'postgres',
    pool: {
        max: 23,
        idle: 10000,
        evict:15000
    },
    logging: console.log
})


const prob = async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection success')
    } catch (error) {
        console.error(`Error:  ${error}`)
    }
}
