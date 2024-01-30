import mongoose from "mongoose"
import { config } from "../../config/config.env"
import { createSchemas } from "../models/index.model"


export const loaderDB = async (): Promise<void> =>{
    try {
        await mongoose.connect( config.dbUrl !== undefined ? config.dbUrl : '' )
        console.log('connection succesfull')
    } catch (error) {
        console.error(error)
    }
}

export const Model = createSchemas( mongoose )