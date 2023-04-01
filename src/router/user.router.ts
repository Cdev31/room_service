import {Router,Request,Response,NextFunction} from 'express'

//internal imports
import {validateSChema} from '../middleware/validator.handler'

import {createUserSchema,findQueryUserSchema,
    findOneUserSchema,loginUserSchema,changeUserSchema,changeUserPasswordSchema} from './../schemas/user.schema'

import {userService} from '../service/user.service'

export const userRouter = Router()

userRouter.get('/',
validateSChema(findQueryUserSchema,'query'),
async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {status,message,response} = await userService.findUsers(req.query)
        res.status(200).json({
            status: status,
            message: message,
            response: response
        });
    } catch (error) {
        next(error)
    }
});

userRouter.get('/:id',async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await userService.findByPKUser(req.params.id)
        res.status(response.status).json(response.response)
    } catch (error) {
        next(error)
    }
});

userRouter.post('/register',
validateSChema(createUserSchema,'body')
,async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await userService.registerUser(req.body);
        res.status(200).json(response.response)
    } catch (error) {
        next(error)
    }
});

userRouter.post('/login',
validateSChema(loginUserSchema,'body'),
async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const {email,password} = req.body
        const {status,message,response} = await userService.loginUser(email,password)
        res.status(status).json({
            status: status,
            message: message,
            response: response
        })
    } catch (error) {
        next(error)
    }
})

userRouter.patch('/:id',
validateSChema(findOneUserSchema,'params'),
validateSChema(changeUserSchema,'body'),
async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const id = parseInt(req.params.id)
        const changes = req.body
        const response = await userService.updateUser(id,changes);
        res.status(response.status).json(response.response)
    } catch (error) {
        next(error)
    }
});

userRouter.put('/change_pass/:id',
validateSChema(findOneUserSchema,'params'),
validateSChema(changeUserPasswordSchema,'body'),
async (req: Request,res:Response,next:NextFunction)=>{
    try {
        const id = parseInt(req.params.id)
        const {password} = req.body
        const response = await userService.changePassword(id,password)
        res.status(response.status).json(response.response)
    } catch (error) {
        next(error)
    }
});

userRouter.delete('/:id',
validateSChema(findOneUserSchema,'params'),
async(req:Request,res:Response)=>{
    try {
        const response = await userService.deleteUser(req.params.id)
        res.status(response.status).json(response.response)
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
});
