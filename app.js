var Sequelize = require('sequelize');


var connection = new Sequelize ('financial_data', 'root', 'root', {
    dialect: 'mysql'
});

var Users = connection.define('users', {
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
    }
});

connection
.sync({
    force: true,

})
.then(function () {
    Users.create({
        name: 'test user 1',
        character_type: 'Knight',
        completion: '30%',
        liquid_currency: 5000
    })
})
.catch(function (error) {
    console.log(error);
});