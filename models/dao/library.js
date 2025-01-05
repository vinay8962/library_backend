const library = require("../dto/library");
const libraryPlan = require("../dto/library_plan");

const addLibrary = async (data) => {
  try {
    const { name, location, plans, start_time, close_time, seats, owner_id } =
      data;

    const updatedStartTime = new Date(start_time);
    const updatedEndTime = new Date(close_time);

    // First, create the library entry
    const newLibrary = await library.create({
      name,
      location,
      start_time: updatedStartTime,
      close_time: updatedEndTime,
      seats,
      owner_id,
    });

    // If there are plans, insert them with the library_id
    if (plans && plans.length > 0) {
      const libraryPlans = plans.map((plan) => ({
        library_id: newLibrary.id, // Link the plan to the created library
        plan_name: plan.plan_name,
        plan_frequency: plan.plan_frequency,
        plan_amount: plan.plan_amount,
      }));

      await libraryPlan.bulkCreate(libraryPlans); // Insert all plans in one go
    }

    // Fetch the created library with its plans
    return await library.findOne({
      where: { id: newLibrary.id },
      include: [{ model: libraryPlan, as: "libraryPlan" }],
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

const getAllLibrary = async () => {
  try {
    return await library.findAll({
      include: { model: libraryPlan, as: "libraryPlan" },
    });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { addLibrary, getAllLibrary };
