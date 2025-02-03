const { libraryUser, User, libraryPlan } = require("../dto");

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
    return await libraryUser.findAll({
      include: [
        {
          model: User,
          as: "associatedUser",
        },
        {
          model: libraryPlan,
          as: "libraryPlan",
        },
      ],
    });
  } catch (err) {
    console.error("Error fetching library users:", err.message); // Add error logging for debugging
    throw err;
  }
};

const getLibraryUserByLibraryId = async (id) => {
  try {
    return await libraryUser.findAll({
      where: {
        library_id: id,
      },
      include: [
        {
          model: User,
          as: "associatedUser",
        },
        {
          model: libraryPlan,
          as: "libraryPlan",
        },
      ],
    });
  } catch (err) {
    console.error("Error fetching library users:", err.message); // Add error logging for debugging
    throw err;
  }
};

module.exports = { addLibraryUser, getLibraryUser, getLibraryUserByLibraryId };
