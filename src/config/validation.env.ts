import Joi from "joi";
import { IConfig } from "./config.interface";


const JoiValidationSchema = Joi.object({
    env: Joi.string().required(),
    port: Joi.number().required(),
    dbUrl: Joi.string().required()
})

export function validationEnv ( config: IConfig ){
    const { error } = JoiValidationSchema.validate( config )

    if( error ) throw new Error(` Enviroment ${ error?.message } `)

}