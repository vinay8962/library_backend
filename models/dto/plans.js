const Sequelize = require("sequelize");
const sequelize = require("../../config/db");
const libraryPlan = require("./library_plan");

const plans = sequelize.define(
  "Plans",
  {
    plan_id: {
      type: Sequelize.INTEGER,
      allowNull: false, // Fixed typo
      primaryKey: true,
      autoIncrement: true,
    },
    plan_frequency: {
      type: Sequelize.STRING,
      allowNull: false, // Fixed typo
    },
  },
  {
    tableName: "plans",
    timestamps: false, // Fixed typo
  }
);

module.exports = plans;
