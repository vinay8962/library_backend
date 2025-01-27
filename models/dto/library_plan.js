const Sequelize = require("sequelize");
const sequelize = require("../../config/db");
const Plans = require("./plans");

const libraryPlan = sequelize.define(
  "LibraryPlans",
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
        model: "librarys",
        key: "id",
      },
    },
    plan_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    plan_amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    plan_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "plans", // Ensure this matches the actual table name
        key: "plan_id",
      },
    },
  },
  {
    tableName: "library_plans", // Ensure this matches the actual table name in DB
    timestamps: false,
  }
);

// ✅ Establish the association between `library_plan` and `plans`

module.exports = libraryPlan;
