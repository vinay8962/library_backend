const { Sequelize } = require("sequelize");
const sequelize = require("../../config/db");

const LibraryHasSeats = sequelize.define(
  "LibraryHasSeats",
  {
    library_has_seats_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    libraryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "librarys", // Replace with the actual table name for the Library model
        key: "id",
      },
    },
    status: {
      type: Sequelize.ENUM("occupied", "free"), // Define ENUM for the status
      allowNull: false,
      defaultValue: "free", // Default status if needed
    },
  },
  {
    tableName: "library_has_seats", // Use the actual table name in your database
    timestamps: false, // Disable automatic timestamps if not needed
  }
);

module.exports = LibraryHasSeats;
