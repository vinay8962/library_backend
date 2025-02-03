const { libraryPlan, plans } = require("../dto");

const getLibraryPlan = async ({ id }) => {
  try {
    return await libraryPlan.findAll({
      where: { library_id: id },
      include: [
        {
          model: plans, // Include Plans table
          as: "planDetails",
        },
      ],
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { getLibraryPlan };
