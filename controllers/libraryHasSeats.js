const { StatusCodes } = require("http-status-codes");
const librarySeatsHelper = require("../models/dao/libraryHasSeats");

const getAllLibrarySeats = async (req, res) => {
  try {
    // Fetch all library seats from the database
    const librarySeats = await librarySeatsHelper.getLibrarySeats();

    // Send success response
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Library seats retrieved successfully",
      data: librarySeats,
    });
  } catch (err) {
    // Handle server error
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};

const getLibrarySeatById = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch a library seat by libraryId
    const librarySeat = await librarySeatsHelper.getLibrarySeatById(id);

    // If not found, send a 404 response
    if (!librarySeat) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: `Library seat with Id ${id} not found`,
      });
    }

    // Send success response
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Library seat retrieved successfully",
      data: librarySeat,
    });
  } catch (err) {
    // Handle server error
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};
const getLibrarySeatByLibraryId = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch a library seat by libraryId
    const librarySeat = await librarySeatsHelper.getLibrarySeatByLibraryId(id);

    // If not found, send a 404 response
    if (!librarySeat) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: `Library seat with LibraryId ${id} not found`,
      });
    }

    // Send success response
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Library seat retrieved successfully",
      data: librarySeat,
    });
  } catch (err) {
    // Handle server error
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};

module.exports = {
  getAllLibrarySeats,
  getLibrarySeatByLibraryId,
  getLibrarySeatById,
};
