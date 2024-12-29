const Sequelize = require("sequelize");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    // Create a new Sequelize instance
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
); // Set the host and dialect

module.exports = sequelize; // Export the Sequelize instance
