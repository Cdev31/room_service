import {Router,Request,Response,NextFunction} from 'express'

//internal imports
import {validateSChema} from '../middleware/validator.handler'
import {userService} from '../service/user.service'
import {uploadUser} from '../middleware/images.handler'
import {createUserSchema,findQueryUserSchema,addPhotoProfile,
    findOneUserSchema,loginUserSchema,changeUserSchema,changeUserPasswordSchema} from './../schemas/user.schema'
import passport from 'passport'



export const userRouter = Router()

userRouter.get('/',
passport.authenticate('jwt',{session:false}),
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

userRouter.get('/:id',
passport.authenticate('jwt',{session:false}),
async(req:Request,res:Response,next:NextFunction)=>{
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
passport.authenticate('jwt',{session:false}),
validateSChema(findOneUserSchema,'params'),
validateSChema(changeUserSchema,'body'),
async(req:Request,res:Response,next:NextFunction)=>{
    try {
      
        const {message,response,status} = await userService.updateUser(req.params.id,req.body);
        res.status(status).json(response)
    } catch (error) {
        next(error)
    }
});

userRouter.put('/change_pass/:id',
passport.authenticate('jwt',{session:false}),
validateSChema(findOneUserSchema,'params'),
validateSChema(changeUserPasswordSchema,'body'),
async (req: Request,res:Response,next:NextFunction)=>{
    try {
        
        const {password} = req.body
        const response = await userService.changePassword(req.params.id,password)
        res.status(response.status).json(response.response)
    } catch (error) {
        next(error)
    }
});

userRouter.patch('/add_photo/:id',
passport.authenticate('jwt',{session:false}),
validateSChema(findOneUserSchema,'params'),
validateSChema(addPhotoProfile,'file'),
uploadUser.single('photo'),
async (req: Request,res:Response,next:NextFunction)=>{
    try {
        const response = await userService.addPhoto(req.params.id,req)
        res.status(response.status).json(response.response)
    } catch (error) {
        next(error)
    }
});

userRouter.delete('/:id',
passport.authenticate('jwt',{session:false}),
validateSChema(findOneUserSchema,'params'),
async(req:Request,res:Response)=>{
    try {
        const {status,response,message} = await userService.deleteUser(req.params.id)
        res.status(status).json(response)
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
});
