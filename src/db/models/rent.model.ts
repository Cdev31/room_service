import {DataTypes,Model} from 'sequelize'

export const RENT_TABLE:string ='rents'

export const rentModel ={
    rentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'rent_id'
    },
    userRent: {
        type: DataTypes.INTEGER,
        alloNull: false,
        field: 'user_rent'
    },
    room: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'room_rented'
    },
}
