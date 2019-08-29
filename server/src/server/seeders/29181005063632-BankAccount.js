const bcrypt = require('bcrypt');

const cvc = ''+Math.round(Math.random()*9)+''+Math.round(Math.random()*9)+''+Math.round(Math.random()*9)+'';
const twoNumber = ''+Math.round(Math.random()*9)+''+Math.round(Math.random()*9)+'';
const fourNumber = ''+twoNumber+''+twoNumber+'';
const number = ''+fourNumber+' '+fourNumber+' '+fourNumber+' '+fourNumber+'';
const expiry = twoNumber+'/'+twoNumber;

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('BankAccounts', [{
      balance:150,
      cvc:cvc,
      number:number,
      expiry:expiry,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
  },
};
