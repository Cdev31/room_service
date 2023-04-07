import { QueryInterface } from 'sequelize';
//internal imports
import {CATEGORY_TABLE} from '../models/category.model'
import {COUNTRY_TABLE} from '../models//country.model'
import {USER_TABLE} from '../models/user.model'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface:QueryInterface) {
      await queryInterface.bulkInsert(CATEGORY_TABLE, [{
        category_name: 'Basic Price'
      },
      {
        category_name: 'Grand Price'
      },
      {
        category_name: 'Country'
      },
      {
        category_name: 'Mediam Price'
      },
    ],
     {});
     await queryInterface.bulkInsert(COUNTRY_TABLE,[{
        country_name: 'El Salvador'
     },
     {
        country_name: 'Guatemala'
     },
     {
        country_name: 'España'
     },
     {
        country_name: 'Costa Rica'
     },
     {
        country_name: 'Mexico'
     },
     {
        country_name: 'Argentina'
     }
    ]);
  },

  async down (queryInterface:QueryInterface) {
    await queryInterface.bulkDelete(CATEGORY_TABLE, {});
    await queryInterface.bulkDelete(COUNTRY_TABLE, {});
  }
};
