"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("plans", [
      { plan_id: 111, plan_frequency: "1 Month" },
      { plan_id: 112, plan_frequency: "6 Month" },
      { plan_id: 113, plan_frequency: "1 Years" },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("plans", null, {});
  },
};
