import bcrypt from 'bcrypt'


export const hashPasword = ( password: string ): string =>{
    const salts = bcrypt.genSaltSync(10)
    const hash =  bcrypt.hashSync( password, salts )
    return hash
}


export const validatePassword = ( password: string, hash: string ): boolean =>{
    const validate = bcrypt.compareSync( password, hash )
    return validate
}