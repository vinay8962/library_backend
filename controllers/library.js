const { StatusCodes } = require("http-status-codes");
const librayrModelHelper = require("../models/dao/library");

const createLibrary = async (req, res) => {
  try {
    const data = req.body;
    const library = await librayrModelHelper.addLibrary(data);
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Library created successfully",
      data: library,
    });
  } catch (err) {
    console.log(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Server error",
      error: err,
    });
  }
};

const getAllLibrarys = async (req, res) => {
  try {
    const library = await librayrModelHelper.getAllLibrary();
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Library retrieved successfully",
      data: library,
    });
  } catch (err) {
    console.log(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Server error",
      error: err,
    });
  }
};

const getLibrary = async (req, res) => {
  try {
    const { owner_id } = req.params; // Get owner_id from request params
    const library = await librayrModelHelper.getLibrary(owner_id);

    if (!library) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Library not found",
      });
    }

    res.status(StatusCodes.OK).json({
      success: true,
      message: "Library retrieved successfully",
      data: library,
    });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};

const getLibraryById = async (req, res) => {
  try {
    const { id } = req.params;
    const library = await librayrModelHelper.getLibraryById(id);
    if (!library) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Library not found",
      });
    }
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Library retrieved successfully",
      data: library,
    });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};

module.exports = { createLibrary, getAllLibrarys, getLibrary, getLibraryById };
