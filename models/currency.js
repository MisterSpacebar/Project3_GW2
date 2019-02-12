'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('currency', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    value: {
        type: Sequelize.FLOAT,
        allowedNull: false
    },
    currencyId: {
        type: Sequelize.INTEGER
      }, {});
  item.associate = function(models) {
    // associations can be defined here
  };
  return currency;
};