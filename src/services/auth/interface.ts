import { IUser } from "../../db/models/users";


export type response = {
    error?: string | null
    message?: string | null
    status: number
    response: any
}

export interface IAuthServices {

    login( user: any ): object;

    register( user: Omit<IUser, 'google' | 'emailVerify'| 'photo'| 'userType'> ): Promise<response>;

    changePasword(): void;

}