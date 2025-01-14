const Role = require("../dto/role");
const user = require("../dto/user");
const bcrypt = require("bcrypt");

const addUser = async (data) => {
  try {
    const saltRounds = 10;
    data.password = await bcrypt.hash(data.password, saltRounds);
    return await user.create(data);
  } catch (err) {
    throw new Error(err);
  }
};

const getAllUsers = async () => {
  try {
    return await user.findAll({
      include: [
        {
          model: Role,
          as: "role",
        },
      ],
    });
  } catch (err) {
    throw new Error(err);
  }
};
const getUser = async (id) => {
  try {
    return await user.findById(id);
  } catch (err) {
    throw new Error(err);
  }
};

const updateUser = async (id, data) => {
  try {
    return await user.findByIdAndUpdate(id, data, { new: true });
  } catch (err) {
    throw new Error(err);
  }
};

const deleteUser = async (id) => {
  try {
    return await user.findByIdAndDelete(id);
  } catch (err) {
    throw new Error(err);
  }
};

const findUser = async (data) => {
  try {
    return await user.findOne(data);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  addUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
  findUser,
};
