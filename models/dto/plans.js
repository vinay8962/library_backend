const Sequelize = require("sequelize");
const sequelize = require("../../config/db");

const Plans = sequelize.define(
  "plans",
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

module.exports = Plans;
