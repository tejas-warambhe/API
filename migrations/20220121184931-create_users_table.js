'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        queryInterface.createTable("Users", {
            user_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4
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
            created_at: {
                type: Sequelize.DATE,

            },
            last_logged_in: {
                type: Sequelize.DATE,

            }
        })
    },

    async down(queryInterface, Sequelize) {
        queryInterface.dropTable("Users");
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    }
};