const Sequelize = require("sequelize");
const sequelize = require("../../config/db");

const library = require("./library");
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
    tableName: "library_plan",
    timestamps: false,
  }
);

// libraryPlan.belongsTo(library, {
//   foreignKey: "libraryId",
//   as: "library",
// });

module.exports = libraryPlan;
