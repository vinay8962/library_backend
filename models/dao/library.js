const library = require("../dto/library");
const libraryPlan = require("../dto/library_plan");

const addLibrary = async (data) => {
  try {
    const { name, location, plans, start_time, close_time, seats, owner_id } =
      data;
    const updatedStartTime = new Date(start_time);
    const updatedEndTime = new Date(close_time);
    const newLibrary = await library.create(
      {
        name,
        location,
        libraryPlan: plans,
        start_time: updatedStartTime,
        close_time: updatedEndTime,
        seats,
        owner_id,
      },
      {
        include: [
          {
            model: libraryPlan,
            as: "libraryPlan",
          },
        ],
      }
    );
    return newLibrary;
  } catch (err) {
    throw new Error(err);
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
