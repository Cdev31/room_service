import {IsString,Length,IsEmail,IsNumber,IsDate,IsUrl,IsNotEmpty} from 'class-validator'

export class createUserSchema{
    @IsString()
    @Length(3,15)
    readonly name: string
    @IsString()
    @Length(3,15)
    readonly surname: string
    @IsDate()
    readonly dateOfBirth: Date
    @IsEmail()
    readonly email: string
    @IsString()
    @Length(8,12)
    readonly password: string
    @IsUrl()
    readonly profilePhoto: string
}

export class updateUserSchema{
    @IsString()
    @Length(3,15)
    readonly name?: string
    @IsString()
    @Length(3,15)
    readonly surname?: string
    @IsDate()
    readonly dateOfBirth?: Date
    @IsEmail()
    readonly email?: string
    @IsString()
    @Length(8,2)
    readonly password?: string
    @IsUrl()
    readonly pofilePhoto?: string
}

export class loginUserSchema{
    @IsEmail()
    readonly email: string
    @IsString()
    @Length(8,12)
    readonly password: string
}

export class findOneUserSchema{
    @IsNumber()
    id: number
}