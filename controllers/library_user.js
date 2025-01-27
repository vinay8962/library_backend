const { StatusCodes } = require("http-status-codes");
const libraryUserHelper = require("../models/dao/library_users");

const createLibraryUser = async (req, res) => {
  try {
    const data = req.body;

    const response = await libraryUserHelper.addLibraryUser(data);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created library user",
      data: response,
    });
  } catch (err) {
    console.error("Error creating library user:", err.message); // Log the error
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Server error while creating library user",
      error: err.message, // Return the error message for debugging
    });
  }
};

const getAllLibraryUser = async (req, res) => {
  try {
    const response = await libraryUserHelper.getLibraryUser();
    if (!response || response.length === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "No library users found",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Library users retrieved successfully",
      data: response,
    });
  } catch (err) {
    console.error("Error retrieving library users:", err.message); // Log the error
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Server error while retrieving library users",
      error: err.message, // Return the error message for debugging
    });
  }
};

module.exports = { createLibraryUser, getAllLibraryUser };
