const { StatusCodes } = require("http-status-codes");
const librayrModelHelper = require("../models/dao/library");

const createLibrary = async (req, res) => {
  try {
    const library = await librayrModelHelper.addLibrary(req.body);

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

const getLibrary = async (req, res) => {
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

module.exports = { createLibrary, getLibrary };
