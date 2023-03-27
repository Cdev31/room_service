import {IsString,IsDate, Length, IsUrl, IsNumber,ValidateNested,IsNotEmpty,IsEmpty} from 'class-validator'

type status = 'Rented' | 'Not rented'

class photosRoom{
    @IsUrl()
    readonly photo1: string

    @IsUrl()
    readonly photo2: string

    @IsUrl()
    readonly photo3: string
}

export class findByPkRoomSchema{
    @IsNumber()
    @IsNotEmpty()
    id: number
}

export class createRoomSchema{
    @IsString()
    @IsNotEmpty()
    @Length(10,25)
    readonly tittle: string

    @IsString()
    @IsNotEmpty()
    @Length(70,100)
    readonly description:string

    @IsDate()
    @IsNotEmpty()
    readonly startDate: Date

    @IsDate()
    @IsNotEmpty()
    readonly finishDate: Date

    @ValidateNested()
    @IsNotEmpty()
    readonly photos: photosRoom

    @IsNumber()
    @IsNotEmpty()
    readonly price: number
    readonly status: status
}

export class updateRoomByPkSchema{
    @IsString()
    @IsEmpty()
    @Length(10,25)
    readonly tittle?: string

    @IsString()
    @IsEmpty()
    @Length(70,100)
    readonly description?:string

    @IsDate()
    @IsEmpty()
    readonly startDate?: Date

    @IsDate()
    @IsEmpty()
    readonly finishDate?: Date

    @ValidateNested()
    @IsEmpty()
    readonly photos?: photosRoom

    @IsNumber()
    @IsEmpty()
    readonly price?: number
    readonly status?: status
}

export class queryFindRoomSchema{
    readonly limit?: number
    readonly offser?: number
    readonly min_price?: number
    readonly max_price?: number 
}
