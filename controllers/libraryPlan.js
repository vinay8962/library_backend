const { StatusCodes } = require("http-status-codes");
const libraryPlanHelper = require("../models/dao/libraryPlans");

const getLibraryPlan = async (req, res) => {
  try {
    const id = req.params;
    const libraryPlan = await libraryPlanHelper.getLibraryPlan(id);
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Library plan retrieved successfully",
      data: libraryPlan,
    });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};

module.exports = { getLibraryPlan };
