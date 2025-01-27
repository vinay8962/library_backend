const { Role } = require("../dto");

const getRole = async () => {
  try {
    return await Role.findAll();
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { getRole };
