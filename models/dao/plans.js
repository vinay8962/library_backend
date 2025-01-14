const Plans = require("../dto/plans");

const getPlans = async () => {
  try {
    return await Plans.findAll(); // Fixed incorrect import reference
  } catch (error) {
    throw new Error(error.message); // Added `.message` for better error handling
  }
};

module.exports = { getPlans };
