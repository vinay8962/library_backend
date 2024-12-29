const Sequelize = require("sequelize");
const sequelize = require("../../config/db");

const Role = sequelize.define(
  "role",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    roleName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Roles",
    timestamps: false,
  }
);

module.exports = Role;
