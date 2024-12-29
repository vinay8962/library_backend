const { StatusCodes } = require("http-status-codes");
const roleHelper = require("../models/dao/role");

const getRole = async (req, res) => {
  try {
    const role = await roleHelper.getRole();
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Role retrieved successfully",
      data: role,
    });
  } catch (err) {
    console.log(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};
module.exports = { getRole };
