import { IsDate, IsEmail, IsIn, IsNotEmpty, IsPhoneNumber, IsString, Length, Matches,
         MinLength, ValidateNested } from 'class-validator'
import { Gender } from '../db/models/users'


class UserInformationSchema {
    
    @IsString()
    @IsNotEmpty()
    @Matches(/^[0-9]{8}-[0-9]{1}$/)
    dui: string

    @IsPhoneNumber('SV')
    @IsNotEmpty()
    personalPhone: string

    @IsString()
    @IsNotEmpty()
    @MinLength(50)
    address: string

    @IsDate()
    @IsNotEmpty()
    dateOfBirth: Date
    
}


export class RegisterUserSchema {

    @IsString()
    @IsNotEmpty()
    @Length(3, 10)
    firstName: string

    @IsString()
    @IsNotEmpty()
    @Length(3, 10)
    lastName: string

    @IsString()
    @IsNotEmpty()
    displayName: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsPhoneNumber('SV')
    @IsNotEmpty()
    phone: string

    @IsString()
    @IsIn(['Masculino', 'Femenino', 'Otro'])
    @IsNotEmpty()
    gender: Gender

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string

    @IsString()
    @IsNotEmpty()
    @MinLength(150)
    biografy: string


    @ValidateNested()
    @IsNotEmpty()
    privateInformation: UserInformationSchema
}


export class LoginUserSchema {

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string
}