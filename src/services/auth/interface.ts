import { IUser } from "../../db/models/users";




export interface IAuthServices {

    login(): void;

    register( user: IUser ): Promise<IUser>;

    changePasword(): void;

}