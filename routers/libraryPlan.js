const express = require("express");
const { getLibraryPlan } = require("../controllers/libraryPlan");

const router = express();

router.get("/:id", getLibraryPlan);

module.exports = router;
