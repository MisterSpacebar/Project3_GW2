'use strict';
module.exports = (sequelize, DataTypes) => {
var User = sequelize.define('Userslogin', {
    username: {
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
    }
  }, {});

return userslogin;
};