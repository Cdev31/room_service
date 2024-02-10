
export enum Gender { 
    Masculino = 'Masculino',
    Femenino = 'Femenino',
    Otro = 'Otro'
 }

export enum UserType { 
    Host = 'Host',
    Normal = 'Normal'
 }

interface IUserPrivateInformation {
    dui: string
    personalPhone: string
    address: string
    dateOfBirth: Date
}

export interface IUser {
    firstName?: string
    lastName?: string
    displayName: string
    email: string
    phone: string
    gender: Gender
    password?: string
    google: boolean
    userType: UserType
    biografy: string
    photo: string
    emailVerify: boolean
    privateInformation: IUserPrivateInformation
}