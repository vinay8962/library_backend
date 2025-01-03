const bookingLibrary = require("../dto/booking_library");

const createBookingLibrary = async (data) => {
  try {
    const {
      library_id,
      user_id,
      booking_start_date_time,
      booking_end_date_time,
    } = data;
    return await bookingLibrary.create({
      library_id,
      user_id,
      booking_start_date_time: new Date(booking_start_date_time),
      booking_end_date_time: new Date(booking_end_date_time),
    });
  } catch (err) {
    throw new Error(`Error creating booking: ${err.message}`);
  }
};

const getBookingLibrary = async () => {
  try {
    return await bookingLibrary.findAll();
  } catch (err) {
    throw new Error(`Error retrieving bookings: ${err.message}`);
  }
};

module.exports = { createBookingLibrary, getBookingLibrary };
