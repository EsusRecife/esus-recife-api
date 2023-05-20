'use strict';
const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('InternalUses', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.fn('gen_random_uuid'),
      },
      activity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      qtyStudent: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      qtyEducator: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      infoStudent: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      materials: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('InternalUses');
  },
};
