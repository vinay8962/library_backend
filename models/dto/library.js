const sequelize = require("../../config/db");
const Sequelize = require("sequelize");
const libraryPlan = require("./library_plan");

const library = sequelize.define(
  "Library",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    owner_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    location: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    seats: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    start_time: {
      type: Sequelize.TIME,
      allowNull: false,
    },
    close_time: {
      type: Sequelize.TIME,
      allowNull: false,
    },
  },
  {
    tableName: "librarys",
    timestamps: false,
  }
);

module.exports = library;
