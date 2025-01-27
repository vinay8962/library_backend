const { plans } = require("../dto");

const getPlans = async () => {
  try {
    return await plans.findAll(); // Fixed incorrect import reference
  } catch (error) {
    throw new Error(error.message); // Added `.message` for better error handling
  }
};

module.exports = { getPlans };
