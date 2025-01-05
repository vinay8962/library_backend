const Sequelize = require("sequelize");
const sequelize = require("../../config/db");

const libraryPlan = sequelize.define(
  "library_plan",
  {
    library_plan_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    library_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "library",
        key: "id",
      },
    },
    plan_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    plan_frequency: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    plan_amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "library_plan", // Ensure this matches the actual table name in DB
    timestamps: false,
  }
);

module.exports = libraryPlan;
