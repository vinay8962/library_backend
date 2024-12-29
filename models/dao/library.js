const library = require("../dto/library");

const addLibrary = async (data) => {
  try {
    await library.create(data);
  } catch (err) {
    throw new Error(err);
  }
};
const getAllLibrary = async (data) => {
  try {
    await library.findAll(data);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { addLibrary, getAllLibrary };
