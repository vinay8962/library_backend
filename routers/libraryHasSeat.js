const express = require("express");
const {
  getAllLibrarySeats,
  getLibrarySeatByLibraryId,
  getLibrarySeatById,
} = require("../controllers/libraryHasSeats");

const router = express();

router.get("/", getAllLibrarySeats);
router.get("/libraryId/:id", getLibrarySeatByLibraryId);
router.get("/:id", getLibrarySeatById);

module.exports = router;
