import { Categories } from "../db/models/category.model";
import { responseType } from "./response";



export interface categoryInterface {
    findCategory(): Promise<responseType<Categories[]>>
    findByPkCategory(id: number): Promise<responseType<Categories>>
}