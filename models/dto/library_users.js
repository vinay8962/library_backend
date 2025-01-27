const Sequelize = require("sequelize");
const sequelize = require("../../config/db");
const User = require("./user");
const library = require("./library");
const libraryPlan = require("./library_plan");

const LibraryUser = sequelize.define(
  "LibraryUser",
  {
    library_user_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    library_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: library,
        key: "id",
      },
    },
    library_plan_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: libraryPlan,
        key: "library_plan_id",
      },
    },
    status: {
      type: Sequelize.ENUM("active", "inactive", "suspended"),
      allowNull: false,
      defaultValue: "active",
    },
    start_date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    end_date: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    tableName: "library_users",
    timestamps: false,
  }
);

module.exports = LibraryUser;
