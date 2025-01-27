"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("library_users", {
      library_user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true, // Added primaryKey
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      library_plan_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM("active", "inactive", "suspended"),
        allowNull: false,
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: true, // Changed to true to allow empty end dates
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("library_users");
  },
};
