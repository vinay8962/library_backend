const { StatusCodes } = require("http-status-codes");
const userModelHelper = require("../models/dao/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { roles } = require("../config/constant");

const createUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      mobile,
      roleId,
      address,
      libraryId,
      libraryPlanId,
    } = req.body;

    // Validate input data
    if (roleId === 103 && (!libraryId || !libraryPlanId)) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "Library ID and Library Plan ID are required for role ID 103.",
      });
    }

    // Create user
    const user = await userModelHelper.addUser({
      name,
      email,
      password,
      mobile,
      roleId,
      address,
      libraryId,
      libraryPlanId, // Pass the libraryPlanId to the addUser helper
    });

    res.status(StatusCodes.CREATED).json({
      success: true,
      message: "User created successfully",
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.roleId,
        address: user.address,
      },
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || "Server error",
    });
  }
};

const getAllUser = async (req, res) => {
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
const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModelHelper.getUser(id);
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "User not found",
      });
    }
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

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModelHelper.findUser({ where: { email } });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const token = jwt.sign(
      { id: user.id, username: user.name, role: user.roleId },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      }
    );
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Login SuccessFul",
      data: {
        token: token,
        role: user.roleId,
        userId: user.id,
      },
    });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};

module.exports = { createUser, getAllUser, loginUser, getUser };
