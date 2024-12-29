const plan = require("../dto/plan");

const addPlan = async (data) => {
  try {
    await plan.create(data);
  } catch (err) {
    throw new Error(err);
  }
};
