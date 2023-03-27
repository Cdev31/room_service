export interface responseUserType<T> {
    status: number
    message: string
    response: T
}

export interface responseErrorType{
   status: number
   error: string
}

export interface userInterface{

    findUsers(): responseUserType<any> | responseErrorType

    findByPKUser(id:number): responseUserType<any> | responseErrorType

    createUser(body:string): responseUserType<any> | responseErrorType

    updateUser(id:number,changes:string): responseUserType<any> | responseErrorType

    deleteUser(id:number): responseUserType<any> | responseErrorType
    
}

