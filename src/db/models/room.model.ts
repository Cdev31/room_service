import {DataTypes,Model, Sequelize} from 'sequelize'

//internal imports
import {USER_TABLE} from './user.model'
import {COUNTRY_TABLE} from './country.model'
import { CATEGORY_TABLE } from './category.model'

export const ROOM_TABLE = 'rooms'

export const roomModel = {
    roomId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        field: 'user_id'
    },
    tittle: {
        type: DataTypes.STRING(35),
        allowNull: false,
        field: 'tittle'
    },
    description: {
        type: DataTypes.STRING(200),
        allowNull:false,
        field: 'description'
    },
    imageRoom: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        unique: true,
        field: 'image_room'
    },
    region: {
        type: DataTypes.STRING,
        allowNUll: false,
        field: 'region_room'
    },
    address:{
        type: DataTypes.STRING(80),
        allowNull: false,
        field: 'address_room'
    },
    price: {
        type: DataTypes.DECIMAL(6,2),
        allowNull: false,
        field: 'room_price'
    },
    services: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        field: 'service_room',
        validate: {
            len:[6,6],
            message:'at least 6 room services are needed'
        }
    },
    status: {
       type: DataTypes.ENUM('Reserved', 'Unreserved'),
       allowNull: false,
       defaultValue: 'Unreserved',
       field: 'room_status'
    },
    starDate: {
        type: DataTypes.DATEONLY,
        allowNull:false,
        field:'start_date'
    },
    finishDate:{
        type: DataTypes.DATEONLY,
        allowNull:false,
        field:'finish_date'
    },
    belongingUser:{
        type: DataTypes.UUID,
        allowNull:false,
        field:'belonging_user',
        references: {
            model: USER_TABLE,
            key: 'user_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    category:{
        type: DataTypes.UUID,
        allowNull:false,
        field:'belonging_category',
        references: {
            model: CATEGORY_TABLE,
            key: 'category_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    country: {
        type: DataTypes.INTEGER,
        allowNull:false,
        field:'belonging_country',
        references: {
            model: COUNTRY_TABLE,
            key: 'country_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

export class Rooms extends Model {
    static associate(models:any) {
      this.belongsTo(
        models.User,
        {
          as: 'belonginUser',
        },
      )
      this.belongsTo(
        models.Countries,
        {
            as: 'belogingCountryRoom'
        }
    )
    this.belongsTo(
        models.Categories,
        {
            as: 'belogingCategory'
        }
    )
    }
  
    static config(sequelize:Sequelize) {
      return {
        sequelize,
        tableName: ROOM_TABLE,
        ModelName: 'Rooms',
        timestamps: false,
      };
    }
  }