const { LibraryHasSeats } = require("../dto");

const getLibrarySeats = async () => {
  try {
    return await LibraryHasSeats.findAll();
  } catch (err) {
    throw new Error(err.message);
  }
};

const getLibrarySeatById = async (id) => {
  try {
    return await LibraryHasSeats.findAll({
      where: { library_has_seats_id: id },
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

const getLibrarySeatByLibraryId = async (id) => {
  try {
    return await LibraryHasSeats.findAll({ where: { libraryId: id } });
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  getLibrarySeats,
  getLibrarySeatByLibraryId,
  getLibrarySeatById,
};
