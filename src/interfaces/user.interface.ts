export interface responseUserType<T> {
    status: number
    message: string
    response?: T
}


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

export interface changeUser extends Omit<UserAtributtes,'email' | 'password' | 'role' >{}

export interface userInterface{

    findUsers(query: {}): Promise<responseUserType<UserAtributtes[]>> 

    findByPKUser(id:string): Promise<responseUserType<UserAtributtes> >

    registerUser(body:UserAtributtes): Promise<responseUserType<UserAtributtes>>

    loginUser(email: string,password: string): Promise<responseUserType<Pick<UserAtributtes,'recoveryToken'>>> 

    updateUser(id:number,changes:changeUser): Promise<responseUserType<UserAtributtes>> 

    changePassword(id:number,password: string): Promise<responseUserType<true | string> >

    deleteUser(id:string):  Promise<responseUserType<boolean>> 
    
}

