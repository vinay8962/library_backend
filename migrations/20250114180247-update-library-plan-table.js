"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("library_plan", "planId", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
    await queryInterface.removeColumn("library_plan", "plan_frequency");
  },

  async down(queryInterface, Sequelize) {
    // Revert changes

    await queryInterface.removeColumn("library_plan", "planId");

    await queryInterface.addColumn("library_plan", "plan_frequency", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};
