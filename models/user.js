const { Sequelize } = require("sequelize");
const sequelize = require('../database/connection');

module.exports = sequelize.define("User", {
    user_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    user_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    user_password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_image: {
        type: Sequelize.STRING,
        allowNull: false
    },
    total_orders: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,

    },
    updatedAt: {
        field: 'last_logged_in',
        type: Sequelize.DATE,

    }
    //ok

});