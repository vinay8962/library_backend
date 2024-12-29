const express = require("express");
const { getRole } = require("../controllers/role");

const router = express.Router();

router.get("/", getRole);

module.exports = router;
