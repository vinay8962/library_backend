"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Add the `library_id` column to the existing table (replace `your_table_name` with the actual table name)
    await queryInterface.addColumn("library_users", "library_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove the `library_id` column from the table during rollback
    await queryInterface.removeColumn("library_users", "library_id");
  },
};
