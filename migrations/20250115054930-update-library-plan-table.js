"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("library_plans", "plan_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
    await queryInterface.removeColumn("library_plans", "planId");
  },

  async down(queryInterface, Sequelize) {
    // Revert changes

    await queryInterface.removeColumn("library_plans", "planId");

    await queryInterface.addColumn("library_plans", "plan_id", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};
