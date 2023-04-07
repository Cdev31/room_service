import { QueryInterface } from 'sequelize'
//internal import
import {CATEGORY_TABLE,categoryModel} from '../models/category.model'
import {COUNTRY_TABLE,countryModel} from '../models//country.model'
import {USER_TABLE,UserModel} from '../models//user.model'
import {ROOM_TABLE,roomModel} from '../models//room.model'
import {RENT_TABLE,rentModel} from '../models//rent.model'


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface) {
      await queryInterface.createTable(CATEGORY_TABLE,categoryModel);
      await queryInterface.createTable(COUNTRY_TABLE,countryModel);
      await queryInterface.createTable(USER_TABLE,UserModel);
      await queryInterface.createTable(ROOM_TABLE,roomModel);
      await queryInterface.createTable(RENT_TABLE,rentModel);
  },

  async down (queryInterface:QueryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(COUNTRY_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(ROOM_TABLE);
    await queryInterface.dropTable(RENT_TABLE);
  }
};
