


interface IRoomImage {
    id: string
    url: string
}


export interface IRoom {
    title: string
    description: string
    reserved: boolean
    address: string
    department: string
    city: string
    price: number
    postalCode: string
    host: string
    maxDays: number
    images: Array<IRoomImage>
}