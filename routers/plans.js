const express = require("express");
const getPlans = require("../controllers/plans");

const router = express.Router();

router.get("/", getPlans);

module.exports = router;
