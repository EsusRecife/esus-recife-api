'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Managers',
      [
        {
          name: 'NOEMI CATHIA ANDRADE SILVA LIRA',
          cpf: '03304000148',
          inepCod: '26127792',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Managers', null, {});
  },
};
