import {DataTypes,Model, Sequelize} from 'sequelize'

//internal import
import {COUNTRY_TABLE} from './country.model'

export const USER_TABLE ='users'

export const UserModel = {
    userId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        field: 'user_id'
    },
    firstName: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique:false,
        field: 'first_name'
    },
    surname: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: false,
        field: 'surname'
    },
    email:{
        type: DataTypes.STRING(80),
        allowNull: false,
        unique: true,
        field: 'user_email'
    },
    number: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
        field: 'user_number'
    },
    profilePhoto:{
        type: DataTypes.STRING(80),
        allowNull: false,
        unique: true,
        field: 'profile_photo'
    },
    description: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: false,
        field: 'user_description'
    },
    country: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        field: 'user_country',
        references: {
            model: COUNTRY_TABLE,
            key: 'country_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    role: {
        type: DataTypes.ENUM('Normal','Host','Administrator'),
        allowNull: false,
        defaultValue: 'Normal',
        field: 'user_role'
    },
    recoveryToken: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      field: 'recovery_token'
    },
    
}

export class Users extends Model{
    static associate(models:any){
        this.hasMany(
            models.Rooms,
            {
                as: 'userRooms',
                foreignKey: 'belongingUser'
            }
        )
        this.belongsTo(
            models.Countries,
            {
                as: 'belogingCountryUser'
            }
        )
        this.hasOne(
            models.Rents,
            {
                as: 'rentUser',
                foreignKey: 'userRent'
            }
        )
    }

    static config(sequelize: Sequelize){
        return {
            sequelize,
            tableName: USER_TABLE,
            ModelName: 'Users',
            timesTamps: false
        }
    }
}
