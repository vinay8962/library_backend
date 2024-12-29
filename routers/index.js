const express = require("express");

const router = express.Router();

router.use("/users", require("./user"));
router.use("/role", require("./role"));
router.use("/library", require("./library"));
router.use("/plan", require("./plan"));
router.use("/", require("./library_plan"));

module.exports = router;
