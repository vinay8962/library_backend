const { StatusCodes } = require("http-status-codes");
const PlanHelper = require("../models/dao/plans");

const getPlans = async (req, res) => {
  try {
    const plans = await PlanHelper.getPlans(); // Fixed import path
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Get plans successful",
      data: plans,
    });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Server error",
      error: err.message, // Send only message, not entire error object
    });
  }
};

module.exports = getPlans;
