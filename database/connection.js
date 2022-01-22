const Sequelize = require('sequelize');

const sequelize = new Sequelize('users', 'root', 'tejas', { host: '127.0.0.1', dialect: 'mysql' }); //replace your db user_id and password

sequelize
    .authenticate()
    .then(() => {
        console.info('INFO - Database connected.')
    })
    .catch(err => {
        console.error('ERROR - Unable to connect to the database:', err)
    });

module.exports = sequelize;