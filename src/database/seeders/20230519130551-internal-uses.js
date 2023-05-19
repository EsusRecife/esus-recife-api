'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('InternalUses', [{
        activity: 'Horta comunitaria',
        qtyStudent: 8,
        qtyEducator: 2,
        infoStudent: 'Estudantes divididos em duas equipes, cada uma responsavel com um tipo de hortaliça',
        materials:[{material: "Composteiras de três compartimentos", qty: 4}, {material: "Composteiras (garrafa pet)", qty: 6}],
        inepCod: '26127792'
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('InternalUses', null, {});
  }
};
