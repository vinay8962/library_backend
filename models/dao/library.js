const { library, libraryPlan, plans } = require("../dto");

const addLibrary = async (data) => {
  try {
    const {
      name,
      location,
      libraryplan,
      start_time,
      close_time,
      seats,
      owner_id,
    } = data;

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
    if (libraryplan && libraryplan.length > 0) {
      const libraryPlans = libraryplan.map((plan) => ({
        library_id: newLibrary.id, // Link the plan to the created library
        plan_name: plan.plan_name,
        plan_id: plan.plan_id,
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
      include: [
        {
          model: libraryPlan,
          as: "libraryPlan",
          include: [
            {
              model: plans, // Include Plans table
              as: "planDetails",
              attributes: ["plan_id", "plan_frequency"], // Fetch specific columns
            },
          ],
        },
      ],
    });
  } catch (err) {
    console.error("Error fetching library data:", err);
    throw new Error(err);
  }
};

const getLibrary = async (owner_id) => {
  try {
    return await library.findAll({
      where: { owner_id },

      include: [
        {
          model: libraryPlan,
          as: "libraryPlan",
          include: [
            {
              model: plans, // Include Plans table
              as: "planDetails",
              attributes: ["plan_id", "plan_frequency"], // Fetch specific columns
            },
          ],
        },
      ],
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

const getLibraryById = async (id) => {
  try {
    return await library.findOne({
      where: { id },
      include: [
        {
          model: libraryPlan,
          as: "libraryPlan",
          include: [
            {
              model: plans, // Include Plans table
              as: "planDetails",
              attributes: ["plan_id", "plan_frequency"], // Fetch specific columns
            },
          ],
        },
      ],
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { addLibrary, getAllLibrary, getLibrary, getLibraryById };
