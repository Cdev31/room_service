import { Users } from "../db/models/user.model"
import {responseType} from './response'


export type UserAtributtes= {
    userId?: string
    firstName: string
    surname: string
    email: string
    password: string
    number: number
    profilePhoto?: string
    description: string
    country: number
    role: string
    recoveryToken?: string
}

export interface Query {
    limit?:number
    offset?: number
    role?: string
}



export interface changeUser extends Partial<Omit<UserAtributtes,'email' | 'password' | 'role' >>{}

export interface userInterface{

    findUsers(query: Query): Promise<responseType<Users[]>> 

    findByPKUser(id:string): Promise<responseType<Users | null> >

    registerUser(body:UserAtributtes): Promise<responseType<Users>>

    loginUser(email: string,password: string): Promise<responseType<Users>> 

    updateUser(id:string,changes:changeUser): Promise<responseType<Users>> 

    changePassword(id:string,password: string): Promise<responseType<boolean> >

    deleteUser(id:string):  Promise<responseType<number>>  
    
}

