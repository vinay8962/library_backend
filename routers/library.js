const express = require("express");
const { createLibrary, getLibrary } = require("../controllers/library");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express();

router.get("/", getLibrary);

router.post("/", authMiddleware, createLibrary);

module.exports = router;
