import {IsString,Length,IsNumberString,IsEmail,IsNumber,
       IsDate,IsUrl,IsOptional, IsIn,Min, IsNotEmpty, IsPositive, IsPhoneNumber} from 'class-validator'


//schema para buscar un solo usuario
export class findOneUserSchema{
    @IsNumber()
    @IsNotEmpty()
    id: number
}

//schema para query params

export class findQueryUserSchema{
    @IsOptional()
    @IsPositive()
    readonly limit: number

    @IsOptional()
    @IsPositive()
    readonly offset: number
    
    @IsOptional()
    @IsIn(['Normal','Host','Administrator'])
    readonly role: string
}

export class createUserSchema{
    @IsString()
    @Length(3,15)
    @IsNotEmpty()
    readonly firstName: string

    @IsString()
    @Length(3,15)
    @IsNotEmpty()
    readonly surname: string

    @IsDate()
    @IsNotEmpty()
    readonly dateOfBirth: Date

    @IsEmail()
    @IsNotEmpty()
    readonly email: string

    @IsString()
    @Length(8,12)
    @IsNotEmpty()
    readonly password: string

    @IsPhoneNumber('ES')
    @IsPhoneNumber('US')
    @IsPhoneNumber('SV')
    @IsPhoneNumber('MX')
    @IsPhoneNumber('CL')
    @IsPhoneNumber('CH')
    @IsNotEmpty()
    readonly number: string

    @IsNumber()
    @IsNotEmpty()
    country: number
    
    @IsString()
    @Length(70,150)
    @IsNotEmpty()
    description: string
}

//para login
export class loginUserSchema{
    @IsEmail()
    @IsNotEmpty()
    readonly email: string

    @IsString()
    @Length(8,12)
    @IsNotEmpty()
    readonly password: string
}

//changed user

export class changeUserSchema{
    @IsString()
    @Length(3,15)
    @IsOptional()
    readonly firstName: string

    @IsString()
    @Length(3,15)
    @IsOptional()
    readonly surname: string

    @IsOptional()
    @IsNumberString()
    readonly number: string

    @IsString()
    @Length(70,150)
    @IsOptional()
    readonly description: string
    
    @IsUrl()
    @IsString()
    @IsOptional()
    readonly profilePhoto: string

    @IsOptional()
    @IsIn(['Normal','Host','Administrator'])
    readonly role: string
}

//change password
export class changeUserPasswordSchema{
    @IsString()
    @Length(8,12)
    @IsNotEmpty()
    readonly password: string
}