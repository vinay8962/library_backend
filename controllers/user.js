const { StatusCodes } = require("http-status-codes");
const userModelHelper = require("../models/dao/user");

const createUser = async (req, res) => {
  try {
    const user = await userModelHelper.addUser(req.body);
    res.status(StatusCodes.OK).json({
      success: true,
      message: "User created successfully",
      data: {
        id: user.id,
        userName: user.userName,
        email: user.email,
        role: user.role,
        address: user.address,
      },
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userModelHelper.getAllUsers();
    res.status(StatusCodes.OK).json({
      success: true,
      message: "User retrieved successfully",
      data: user,
    });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};
module.exports = { createUser, getUser };
