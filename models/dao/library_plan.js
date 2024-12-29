const libraryPlan = require("../dto/library_plan");

const createLibraryPlan = async (data) => {
  try {
    return await libraryPlan.create(data);
  } catch (err) {
    throw new Error(err);
  }
};

const getLibraryPlan = async () => {
  try {
    return await libraryPlan.findAll();
  } catch (err) {
    throw new Error(err);
  }
};

const getLibraryPlanById = async (id) => {
  try {
    return await libraryPlan.findByPk(id);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { createLibraryPlan, getLibraryPlan, getLibraryPlanById };
