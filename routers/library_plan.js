const express = require("express");
const { getLibraryPlan } = require("../controllers/library_plan");
const { createLibrary } = require("../controllers/library");

const router = express.Router();

router.get("/", getLibraryPlan);
router.post("/", createLibrary);

module.exports = router;
