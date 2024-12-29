const role = require("../dto/role");

const getRole = async () => {
  try {
    await role.findAll();
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { getRole };
