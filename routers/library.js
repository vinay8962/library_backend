const express = require("express");
const { createLibrary, getLibrary } = require("../controllers/library");

const router = express();

router.get("/", getLibrary);

router.post("/", createLibrary);

module.exports = router;
