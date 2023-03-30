import {Router,Request,Response} from 'express'

import {categoryServie} from '../service/category.service'

export const categoryRouter = Router()

categoryRouter.get('/',async(_,res:Response)=>{
    try {
        const ress = await categoryServie.findCategory()
        res.status(200).json(ress)
    } catch (error) {
        
    }
});

categoryRouter.get('/:id',async(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        
    }
});

categoryRouter.post('/',async(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        
    }
});

categoryRouter.patch('/',async(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        
    }
});

categoryRouter.delete('/',async(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        
    }
});
