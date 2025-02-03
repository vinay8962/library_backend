const { Sequelize } = require("sequelize");
const sequelize = require("../../config/db");
const library = require("./library");

const bookingLibrary = sequelize.define(
  "BookingLibrary",
  {
    booking_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    seat_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    library_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    booking_start_date_time: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    booking_end_date_time: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "booking_library",
    timestamps: false, // Fixed typo
  }
);

module.exports = bookingLibrary;
