const express = require("express");
const {
  createLibrary,
  getAllLibrarys,
  getLibrary,
  getLibraryById,
} = require("../controllers/library");
const libraryMiddleware = require("../middlewares/LibraryMiddleware");

const router = express();

router.get("/", libraryMiddleware, getAllLibrarys);

router.get("/:owner_id", libraryMiddleware, getLibrary);
router.get("/librarybyid/:id", libraryMiddleware, getLibraryById);

router.post("/", libraryMiddleware, createLibrary);

module.exports = router;
