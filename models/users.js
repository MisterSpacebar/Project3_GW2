'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    character_type: {
        type: Sequelize.STRING,
        allowedNull: false
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
    }, {});
    User.associate = function(models) {
      // associations can be defined here
      // User belongsTo items
      Users.belongsToMany(models.items, {
        through: 'ItemUsers',
        as: 'items',
        foreignKey: 'itemId'
     });
    };
    return User;
  };

// })
// .then(function () {
//     Users.create({
//         name: 'test user 1',
//         character_type: 'Knight',
//         completion: '30%',
//         liquid_currency: 5000
// //     })
// })
// .catch(function (error) {
//     console.log(error);
// });


