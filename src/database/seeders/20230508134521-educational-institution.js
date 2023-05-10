'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('EducationalInstitutions', [{
        inepCod: 26127792,
        name: 'ESCOLA MUNICIPAL SAO DOMINGOS',
        cnpj: '03304711000148',
        cep: '50680000',
        streetNumber: 364 ,
        cellphone: '558133553371',
        email: 'emsaodomingos@gov.br',
        password: '$2b$04$g1.IiJQy1WYFg/7YkWHl9O23IX/wDQffgIpX1v7OvLrnGOCRZgQqO' //26127792
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('EducationalInstitutions', null, {});
  }
};
