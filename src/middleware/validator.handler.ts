import {Request,Response,NextFunction} from 'express'
import {validate,ValidationError} from 'class-validator'

type params = 'body' | 'header' | 'query' | 'params'

export const validateSChema = (schema: any, property: params )=>{
    return async (req:Request,res:Response,next:NextFunction)=>{
      let data = req[property]
      if(data.dateOfBirth && data.dateOfBirth){
        const newDate:Date = new Date(data.dateOfBirth)
        data = {
          ...data,
          dateOfBirth: newDate
        }
      } 
      
      const schemaClass = new schema()
      Object.assign(schemaClass,data)
      const erros: ValidationError[] = await validate(schemaClass)
      if (erros.length > 0){
        res.status(400).json({
          erros: erros.map((error: ValidationError)=> error.constraints)
        })
      }
      next()
    }
}