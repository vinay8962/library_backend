const Sequelize = require("sequelize");
const sequelize = require("../../config/db");

const User = sequelize.define(
  "Users",
  {
    // Define the user model
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    mobile: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    roleId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "role",
        key: "id",
      },
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: false, // Disabling Sequelize's automatic timestamp handling since we have custom fields
  }
);

module.exports = User; // Export the User model
