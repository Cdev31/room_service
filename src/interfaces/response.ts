export interface responseType<T> {
    status: number
    message: string
    response?: T
}