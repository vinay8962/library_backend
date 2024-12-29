"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("LibraryPlan", {
      library_plan_Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      library_Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      plan_Name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      plan_Frequency: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      plan_Amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("LibraryPlan");
  },
};
