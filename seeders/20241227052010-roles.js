"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Roles", // Table name
      [
        {
          id: 101,
          roleName: "Admin",
        },
        {
          id: 102,
          roleName: "LibraryAdmin",
        },
        {
          id: 103,
          roleName: "Student",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
