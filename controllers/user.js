const { StatusCodes } = require("http-status-codes");
const userModelHelper = require("../models/dao/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const user = await userModelHelper.addUser(req.body);
    console.log(user);
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

module.exports = { createUser, getUser, loginUser };
