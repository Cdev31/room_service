import {DataTypes,Model, Sequelize} from 'sequelize'

export const COUNTRY_TABLE = 'countries'

export const countryModel ={
    countryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'country_id'
    },
    countryName: {
        type: DataTypes.STRING,
        field: 'country_name',
        unique: true,
        allowNull: false
    }
}

export class Countries extends Model{
    static associate(models: any){
        this.hasOne(
            models.Users,{
                as: 'countryUser',
                foreignKey: 'country'
            }
        )
        this.hasOne(
            models.Rooms,{
                as: 'countryRoom',
                foreignKey: 'country'
            }
        )
    }

    static config(sequelize: Sequelize){
        return{
            sequelize,
            tableName: COUNTRY_TABLE,
            modelName: 'Countries',
            timestamps: false
        }
    }

}

