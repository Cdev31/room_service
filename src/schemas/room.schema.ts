import { IsNotEmpty, IsNumber, IsString, Matches, Max, Min, MinLength, ValidateNested } from "class-validator"


class ImageRoom {

    @IsString()
    @IsNotEmpty()
    id: string

    @IsString()
    @IsNotEmpty()
    url: string
    
}

export class CreateRoomSchema {

    @IsString()
    @IsNotEmpty()
    @MinLength(60)
    title: string

    @IsString()
    @IsNotEmpty()
    @MinLength(130)
    description: string

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    address: string

    @IsString()
    @IsNotEmpty()
    department: string

    @IsString()
    @IsNotEmpty()
    city: string

    @IsString()
    @IsNotEmpty()
    // @Matches(/^[0-9]{5}$/)
    postalCode: string

    @IsString()
    @IsNotEmpty()
    host: string

    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    @Max(20)
    maxDays: number

    @ValidateNested()
    @IsNotEmpty()
    images: Array<ImageRoom>
}