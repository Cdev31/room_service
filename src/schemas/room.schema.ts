import 'reflect-metadata';
import {IsString,IsDate, Length, IsUrl,IsIn,IsNumber,ValidateNested,IsNotEmpty, IsOptional} from 'class-validator'
import {Type} from 'class-transformer'

type status = 'Rented' | 'Not Rented'

class photosRoom{
    @Type(()=>Object)
    readonly photo1: Express.Multer.File

    @Type(()=>Object)
    readonly photo2: Express.Multer.File

    @Type(()=>Object)
    readonly photo3: Express.Multer.File
}

export class findByPkRoomSchema{
    @IsString()
    @IsNotEmpty()
    id: string
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

    
    @IsNotEmpty()
    readonly starDate: string

    
    @IsNotEmpty()
    readonly finishDate: string

  
    @Type(()=>photosRoom)
    readonly photos: photosRoom


    @IsString()
    @IsNotEmpty()
    readonly price: string

    @IsIn(['Reserved', 'Unreserved'])
    readonly status: status
}

export class updateRoomByPkSchema{
    @IsString()
    @IsOptional()
    @Length(10,25)
    readonly tittle?: string

    @IsString()
    @IsOptional()
    @Length(70,100)
    readonly description?:string

    @IsDate()
    @IsOptional()
    readonly startDate?: Date

    @IsDate()
    @IsOptional()
    readonly finishDate?: Date

    @ValidateNested()
    @IsOptional()
    readonly photos?: photosRoom

    @IsNumber()
    @IsOptional()
    readonly price?: number
    @IsOptional()
    @IsIn(['Reserved','Unreserved'])
    readonly status?: status
}

export class queryFindRoomSchema{
    readonly limit?: number
    readonly offset?: number
    readonly min_price?: number
    readonly max_price?: number 
}
