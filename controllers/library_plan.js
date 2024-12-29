const { StatusCodes } = require("http-status-codes");
const libraryPlanModuleHelper = require("../models/dao/library_plan");

const createLibraryPlan = async (req, res) => {
  try {
    const libraryPlan = await libraryPlanModuleHelper.createLibraryPlan(
      req.body
    );
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Library Plan created successfully",
      data: libraryPlan,
    });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Server error",
      error: err,
    });
  }
};

const getLibraryPlan = async (req, res) => {
  try {
    const libraryPlan = await libraryPlanModuleHelper.getLibraryPlan();
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Library Plan retrieved successfully",
      data: libraryPlan,
    });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Server error",
      error: err,
    });
  }
};

module.exports = { createLibraryPlan, getLibraryPlan };
