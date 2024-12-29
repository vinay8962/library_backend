const sequelize = require("../../config/db");
const Sequelize = require("sequelize");
const { all } = require("../../routers");

const plan = sequelize.define(
  "plan",
  {
    planId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    planName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    planFrequency: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "plan",
    timestamps: false,
  }
);

module.exports = plan;
