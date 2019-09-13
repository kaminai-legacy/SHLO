'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contests', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            onDelete: 'CASCADE',
            references: {
                model: 'Users',
                key: 'id',
            },
        },
        titleOfContest: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        typeOfContest: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        typeOfIndustry: {
            type: Sequelize.ARRAY(Sequelize.TEXT),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        whatVentureDoes: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        inputNameOfTheirVenture: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue:null,
        },
        targetCustomers: {
            type: Sequelize.TEXT,
            allowNull: true,
            defaultValue:null,
        },
        typeOfName: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue:null,
        },
        visualBrandStyle: {
            type: Sequelize.ARRAY(Sequelize.TEXT),
            allowNull: true,
            defaultValue:null,
        },
        preferenceForName: {
            type: Sequelize.ARRAY(Sequelize.TEXT),
            allowNull: true,
            defaultValue:null,
        },
        preferenceForTagline: {
/*

    {
          balance:150,
          cvc:cvc,
          number:number,
          expiry:expiry,
          createdAt: new Date(),
          updatedAt: new Date(),
      }

      {
          balance:10000,
          cvc:'777',
          number:'7777 7777 7777 7777',
          expiry:'77/77',
          createdAt: new Date(),
          updatedAt: new Date(),
      }

 */
            type: Sequelize.ARRAY(Sequelize.TEXT),
            allowNull: true,
            defaultValue:null,
        },
        media: {
            type: Sequelize.ARRAY(Sequelize.TEXT),
            allowNull: true,
            defaultValue:null,
        },
        price: {
            allowNull: false,
            type: Sequelize.INTEGER,
            defaultValue:33,
        },
        // paid: {
        //     type: Sequelize.BOOLEAN,
        //     allowNull: false,
        //     defaultValue:false,
        // },
        // hasWinner: {
        //     type: Sequelize.BOOLEAN,
        //     allowNull: false,
        //     defaultValue:false,
        // },

        status: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue:'Not Paid',
        },

        winner: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue:null,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Contests');
  }
};