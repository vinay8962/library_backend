const role = require("../dto/role");

const getRole = async () => {
  try {
    return await role.findAll();
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { getRole };
