"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("library_plan", {
      library_plan_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      library_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "library", // Ensure this matches your actual table name
          key: "id",
        },
        onDelete: "CASCADE",
      },
      plan_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      plan_frequency: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      plan_amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("library_plan");
  },
};