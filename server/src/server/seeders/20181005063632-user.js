const bcrypt = require('bcrypt');

const random = Math.round(Math.random()*1000);

const email = 'justin'+random+'@gmail.com';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: email,
      password: bcrypt.hashSync('1qaz2w3e4r', bcrypt.genSaltSync(8)),
      firstName: 'ORDO',
      lastName: 'ORDO',
      displayName: 'Tra-ta-ta',
      customerStatus: 'Buyer',
      role: 'USER',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
  },
};
