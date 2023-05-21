'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('KeyInformations', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.fn('gen_random_uuid'),
      },
      amntFoodReceived: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      amntFoodSpent: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      foodDestination: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      foodTypes: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      retrivalPeriod: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      retrivalHours: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      events: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      inepCod: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
      updatedAt: {
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('KeyInformations');
  },
};
