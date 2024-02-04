import { sign, verify } from 'jsonwebtoken'


export const createJwt = ( payload: any, secret: string ): string => {
    return sign( payload, secret ) 
}

export const verifyJwt = async ( token: string, secret: string ) => {
    return verify(token,secret)
}