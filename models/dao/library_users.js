const { libraryUser } = require("../dto");

const addLibraryUser = async (data) => {
  try {
    return await libraryUser.create(data);
  } catch (err) {
    console.error("Error adding library user:", err.message); // Add error logging for debugging
    throw err;
  }
};

const getLibraryUser = async () => {
  try {
    return await libraryUser.findAll();
  } catch (err) {
    console.error("Error fetching library users:", err.message); // Add error logging for debugging
    throw err;
  }
};

module.exports = { addLibraryUser, getLibraryUser };
