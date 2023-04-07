import 'dotenv/config'

export const config = {
    port: process.env.PORT,
    db_url: process.env.DB_URL,
    jwtSecret: process.env.JWT_SECRET || ''  
}
