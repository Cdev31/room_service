import {DataTypes,Model, Sequelize} from 'sequelize'

//internal imports
import {ROOM_TABLE} from './room.model'
import {USER_TABLE} from './user.model'

export const RENT_TABLE:string ='rents'

export const rentModel ={
    rentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'rent_id'
    },
    userRent: {
        type: DataTypes.UUID,
        alloNull: false,
        field: 'user_rent',
        references: {
            model: USER_TABLE,
            key: 'user_id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    },
    room: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'room_rented',
        references: {
            model: ROOM_TABLE,
            key: 'room_id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    },
}

export class Rents extends Model{
    static associate(models:any){
        this.belongsTo(
            models.Users,{
                as: 'userRents'
            }
        )
        this.belongsTo(
            models.Rooms,
            {
                as: 'roomsRented'
            }
        )
    }

    static config(sequelize:Sequelize){
        return {
            sequelize,
            tableName: RENT_TABLE,
            modelName: 'Rents',
            timestamps: false
        }
    }
}
