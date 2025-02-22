const { StatusCodes } = require("http-status-codes");
const bookingLibraryHelper = require("../models/dao/booking_library");

const createBooking = async (req, res) => {
  try {
    const data = req.body;

    // Basic validation (can be replaced with Joi or similar library)
    if (
      !data.library_id ||
      !data.user_id ||
      !data.seat_id ||
      !data.booking_start_date_time ||
      !data.booking_end_date_time
    ) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "All fields are required",
      });
    }

    const booking = await bookingLibraryHelper.createBookingLibrary(data);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Booking created successfully",
      data: booking,
    });
  } catch (err) {
    console.error("Error creating booking:", err.message);
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
    console.error("Error retrieving bookings:", err.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.message || "Server error",
    });
  }
};

const getBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await bookingLibraryHelper.getBookingLibraryById(id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Booking retrieved successfully",
      data: booking,
    });
  } catch (err) {
    console.error("Error retrieving bookings:", err.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.message || "Server error",
    });
  }
};

module.exports = { createBooking, getBooking, getBookingById };
