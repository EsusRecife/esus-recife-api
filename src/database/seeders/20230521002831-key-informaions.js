'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'KeyInformations',
      [
        {
          amntFoodReceived: 200,
          amntFoodSpent: 200,
          foodDestination: 'Compostagem, animais',
          foodTypes: 'cascas de frutas',
          retrivalPeriod: 'Diario',
          retrivalHours: '08:00, 16:00',
          events: true,
          inepCod: '26127792',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amntFoodReceived: 300,
          amntFoodSpent: 200,
          foodDestination: 'Compostagem, animais',
          foodTypes: 'cascas de frutas',
          retrivalPeriod: 'Diario',
          retrivalHours: '08:00, 16:00',
          events: true,
          inepCod: '26127792',
          createdAt: new Date(Date.now() + 13.048e8),
          updatedAt: new Date(Date.now() + 13.048e8),
        },
        {
          amntFoodReceived: 270,
          amntFoodSpent: 200,
          foodDestination: 'Compostagem, animais',
          foodTypes: 'cascas de frutas',
          retrivalPeriod: 'Diario',
          retrivalHours: '08:00, 16:00',
          events: true,
          inepCod: '26127792',
          createdAt: new Date(Date.now() + 24096e5),
          updatedAt: new Date(Date.now() + 24096e5),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('KeyInformations', null, {});
  },
};
