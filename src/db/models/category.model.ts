import {DataTypes,Model, Sequelize} from 'sequelize'

export const CATEGORY_TABLE = 'categories'

export const categoryModel ={
    categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'category_id'
    },
    categoryName: {
        type: DataTypes.STRING,
        field: 'category_name',
        unique: true,
        allowNull: false
    }
}

export class Categories extends Model{
    static associate(models:any){
        this.hasMany(
            models.Rooms,
            {
                as: 'roomCategory',
                foreignKey: 'category'
            }
        )
    }

    static config(sequelize: Sequelize){
        return {
            sequelize,
            tableName: CATEGORY_TABLE,
            modelName: 'Categories',
            timestamps: false
        }
    }
}