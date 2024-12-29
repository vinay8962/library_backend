const Sequelize = require("sequelize");
const sequelize = require("../../config/db");

const libraryPlan = sequelize.define(
  "LibraryPlan",
  {
    library_plan_Id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    library_Id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    plan_Name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    plan_Frequency: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    plan_Amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "libraryPlan",
    timestamps: false,
  }
);

module.exports = libraryPlan;
