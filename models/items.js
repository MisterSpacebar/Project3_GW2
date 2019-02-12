'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('items', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    item_type: {
        type: Sequelize.STRING,
        allowedNull: false
    }, {});
  item.associate = function(models) {
    // associations can be defined here
    // Shop hasMany Coffees
    Items.belongsToMany(models.Users, {
        through: 'ItemUsers',
        as: 'Users',
        foreignKey: 'userId'
    });
  };
  return item;
};