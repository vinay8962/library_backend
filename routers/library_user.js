const express = require("express");
const {
  createLibraryUser,
  getAllLibraryUser,
} = require("../controllers/library_user");

const router = express();

router.post("/", createLibraryUser);
router.get("/", getAllLibraryUser);

module.exports = router;
