/**
 * Created by barrett on 8/28/14.
 */


var mysql = require('mysql');
var dbconfig = require('../config/database');

var connection = mysql.createConnection(dbconfig.connection);

connection.query('CREATE DATABASE ' + dbconfig.database);

'use strict';
module.exports = (sequelize, DataTypes) => {
var User = sequelize.define('User', {
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

return user;
};

connection.end();


