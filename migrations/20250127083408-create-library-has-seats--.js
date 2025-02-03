"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("library_has_seats", {
      library_has_seats_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      libraryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "librarys",
          key: "id",
        },
      },
      status: {
        type: Sequelize.ENUM("occupied", "free"),
        allowNull: false,
        defaultValue: "free",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("library_has_seats");
  },
};
