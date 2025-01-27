const express = require("express");
const {
  createLibrary,
  getAllLibrarys,
  getLibrary,
  getLibraryById,
} = require("../controllers/library");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express();

router.get("/", authMiddleware, getAllLibrarys);

router.get("/:owner_id", authMiddleware, getLibrary);
router.get("/librarybyid/:id", authMiddleware, getLibraryById);

router.post("/", authMiddleware, createLibrary);

module.exports = router;
