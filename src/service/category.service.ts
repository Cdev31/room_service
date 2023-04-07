import {Categories} from '../db/models/category.model'
import {categoryInterface} from '../interfaces/category.interface'

class Category implements categoryInterface{
    async findCategory(){
        const response = await Categories.findAll()
        return {
            status: 200,
            message: 'Success',
            response: response
        }
    }
    async findByPkCategory(id: number){
        const response = await Categories.findByPk(id)
        if(response == null ){
            return {
                status: 404,
                message: 'Not found'
            }
        }
        return {
            status:200,
            message: 'Success',
            response: response
        }
    }
}

export const categoryServie: Category = new Category()