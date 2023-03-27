import {Router,Request,Response} from 'express'

//internal imports
import {validateSChema} from '../middleware/validator.handler'
import {createUserSchema} from './../schemas/user.schema'

export const userRouter = Router()

userRouter.get('/',async(_,res:Response)=>{
    try {
        
    } catch (error) {
        
    }
});

userRouter.get('/:id',async(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        
    }
});

userRouter.post('/',
validateSChema(createUserSchema,'body')
,async(req:Request,res:Response)=>{
    try {
        const body = req.body
        res.status(200).json(body)
    } catch (error) {
        
    }
});

userRouter.patch('/',async(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        
    }
});
userRouter.delete('/',async(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        
    }
});
