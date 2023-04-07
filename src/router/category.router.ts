import {Router,Request,Response, NextFunction} from 'express'

import {categoryServie} from '../service/category.service'

export const categoryRouter = Router()

categoryRouter.get('/',
async(_,res:Response,next:NextFunction)=>{
    try {
        const {status,message,response} = await categoryServie.findCategory()
        res.status(status).json({
            message: message,
            response: response
        })
    } catch (error) {
        next(error)
    }
});

categoryRouter.get('/:id',
async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {status,message,response} = await categoryServie.findByPkCategory(parseInt(req.params.id))
        res.status(status).json({
            message: message,
            response: response
        })
    } catch (error) {
        next(error)
    }
});
