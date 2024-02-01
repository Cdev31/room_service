import { validate, ValidationError } from 'class-validator'
import { Request, Response, NextFunction } from 'express'

type Params = 'body' | 'header' | 'query' | 'params'

export const validateData = ( param: Params, validateSchema: any )=>{

    return async ( req: Request,res: Response, next: NextFunction )=>{
        const data = req[param]
        
        const schema = new validateSchema()
        Object.assign( schema, data )

        const error:ValidationError[] = await validate( schema )
        
        if(error.length > 0){
            return res.status(400).json({
                error: error.map((e)=>e.constraints)
            })
        }
        next()
    }
}

