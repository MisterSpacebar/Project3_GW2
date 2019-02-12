'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      completion: {
        type: Sequelize.TEXT,
        allowedNull: false
      },
      liquid_currency: {
        type: Sequelize.INTEGER,
        allowedNull: false
      }, 
      networth: {
        type: Sequelize.INTEGER
    }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
