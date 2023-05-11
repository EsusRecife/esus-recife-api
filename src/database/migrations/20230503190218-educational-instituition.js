'use strict';
const {v4:uuidv4} = require('uuid') 
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EducationalInstitutions', {
      id: {
        type: Sequelize.UUID,
        primaryKey:true,
        defaultValue: uuidv4()
      },
      inepCod: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cnpj: {
        type: Sequelize.STRING(14),
        allowNull: false
      },
      cep: {
        type: Sequelize.STRING(8),
        allowNull: false
      },
      streetNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cellphone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EducationalInstitutions');
  },
};