import { IUser } from "../../db/models/users";

export type response = {
    error?: string | null
    message?: string | null
    status: number
    response: any
}

export interface IUserServices {

    findByEmail( email: string ): Promise<response>;

    changeTypeHost( id: string ): Promise<response> ;

    find(): Promise<Array<IUser>>

}