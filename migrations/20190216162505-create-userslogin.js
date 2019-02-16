'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Userslogin', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        comment: 'user name',
        unique: true
      },
      password: {
        type: Sequelize.STRING(64),
        allowNull: false,
        comment: 'password',
        unique: true
      },
      key: {
        type: Sequelize.STRING(64),
        allowNull: false,
        comment: 'api key',
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Userslogins');
  }
};