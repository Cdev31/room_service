import { Strategy } from 'passport-local'


import { UserAdapter,  UserServices  } from "../../services/user"
import { validatePassword } from '../hash.password'

const service = new UserServices(new UserAdapter())


export const localStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
}, async ( email, password, done )=>{
    
    try {
        const user = await service.findByEmail(email)

        if( user.status === 404 ) done(null, false)
        
        if( user.status === 200 ){
            
            const isPassword =  validatePassword(password, user.response.password)

            if( isPassword !== true )  done(null, false)

            done( null, user )
        }

    } catch (error) {
        done(error,false)
    }
})