import {Categories} from '../db/models/category.model'

class Category{
    async findCategory(){
        const response = await Categories.findAll()
        return response
    }
}

export const categoryServie: Category = new Category()