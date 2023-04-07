import { Sequelize } from "sequelize";

//internal import
import {Categories,categoryModel} from './category.model'
import {Countries,countryModel} from './country.model'
import {Users,UserModel} from './user.model'
import {Rooms,roomModel} from './room.model'
import {Rents,rentModel} from './rent.model'

export function setupModel(sequelize:Sequelize){
    Categories.init(categoryModel,Categories.config(sequelize))
    Countries.init(countryModel,Countries.config(sequelize))
    Users.init(UserModel,Users.config(sequelize))
    Rooms.init(roomModel,Rooms.config(sequelize))
    Rents.init(rentModel,Rents.config(sequelize))

    Rooms.associate(sequelize.models)
    Users.associate(sequelize.models)
    Countries.associate(sequelize.models)
    Categories.associate(sequelize.models)
    Rents.associate(sequelize.models)
}