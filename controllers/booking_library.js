const { StatusCodes } = require("http-status-codes");
const bookingLibraryHelper = require("../models/dao/booking_library");

const createBooking = async (req, res) => {
  try {
    const data = req.body;
    const booking = await bookingLibraryHelper.createBookingLibrary(data);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Booking created successfully",
      data: booking,
    });
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.message || "Server error",
    });
  }
};

const getBooking = async (req, res) => {
  try {
    const booking = await bookingLibraryHelper.getBookingLibrary();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Booking retrieved successfully",
      data: booking,
    });
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.message || "Server error",
    });
  }
};

module.exports = { createBooking, getBooking };
