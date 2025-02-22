const {
  bookingLibrary,
  library,
  LibraryHasSeats,
  sequelize,
} = require("../dto");

const createBookingLibrary = async (data) => {
  const transaction = await sequelize.transaction(); // Start a transaction
  try {
    const {
      library_id,
      user_id,
      seat_id,
      booking_start_date_time,
      booking_end_date_time,
    } = data;

    // Step 1: Validate inputs
    if (
      !library_id ||
      !user_id ||
      !seat_id ||
      !booking_start_date_time ||
      !booking_end_date_time
    ) {
      throw new Error("Missing required fields for booking.");
    }

    // Step 2: Create the booking
    const booking = await bookingLibrary.create(
      {
        library_id,
        user_id,
        seat_id,
        booking_start_date_time: new Date(booking_start_date_time),
        booking_end_date_time: new Date(booking_end_date_time),
      },
      { transaction } // Use the transaction
    );

    // Step 3: Check and update the seat status
    const seat = await LibraryHasSeats.findOne({
      where: { library_has_seats_id: seat_id },
      transaction, // Use the transaction for consistency
    });

    if (!seat) {
      throw new Error(`Seat with ID ${seat_id} not found.`);
    }

    if (seat.status === "occupied") {
      throw new Error(`Seat with ID ${seat_id} is already occupied.`);
    }

    // Update the seat status to "occupied"
    await seat.update(
      { status: "occupied" },
      { transaction } // Use the transaction
    );

    // Commit the transaction
    await transaction.commit();
    return booking; // Return the created booking
  } catch (err) {
    // Rollback the transaction in case of error
    await transaction.rollback();
    console.error("Error creating booking in DB:", err.message);
    throw new Error(`Error creating booking: ${err.message}`);
  }
};

const getBookingLibrary = async () => {
  try {
    return await bookingLibrary.findAll({
      include: [
        {
          model: library,
          as: "library", // Must match the alias in the association
          required: true, // Ensures only bookings with libraries are included
        },
      ],
    });
  } catch (err) {
    console.error("Error retrieving bookings from DB:", err.message);
    throw new Error(`Error retrieving bookings: ${err.message}`);
  }
};

const getBookingLibraryById = async (id) => {
  try {
    return await bookingLibrary.findOne({
      where: {
        user_id: id,
      },
    });
  } catch (err) {
    console.error("Error fetching library users:", err.message); // Add error logging for debugging
    throw err;
  }
};

module.exports = {
  createBookingLibrary,
  getBookingLibrary,
  getBookingLibraryById,
};
