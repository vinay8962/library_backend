"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "roles", // Table name
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
    await queryInterface.bulkDelete("roles", null, {});
  },
};
