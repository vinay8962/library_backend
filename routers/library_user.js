const express = require("express");
const {
  createLibraryUser,
  getAllLibraryUser,
  getLibraryUserByLibraryId,
} = require("../controllers/library_user");

const router = express();

router.post("/", createLibraryUser);
router.get("/", getAllLibraryUser);
router.get("/:id", getLibraryUserByLibraryId);

module.exports = router;
