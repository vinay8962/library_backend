const Sequelize = require("sequelize");
const sequelize = require("../../config/db");

// Use PascalCase for the model variable and model name
const Role = sequelize.define(
  "Role", // Singular and PascalCase for the model name
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
    tableName: "roles", // Ensure this matches the actual table name in your database
    timestamps: false,
  }
);

module.exports = Role; // Export the model using PascalCase
