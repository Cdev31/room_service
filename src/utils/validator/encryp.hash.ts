import bcrypt from 'bcrypt'

export const createHash = async (password:string): Promise<string> =>{
    const hashedPassword:string = await bcrypt.hash(password,10)
    return hashedPassword
}

export const validateHash = async (password: string, hash: string):Promise<boolean> =>{
    const validateHash:boolean = await bcrypt.compare(password,hash)
    return validateHash
}

