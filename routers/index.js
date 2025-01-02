const express = require("express");

const router = express.Router();

router.use("/users", require("./user"));
router.use("/role", require("./role"));
router.use("/library", require("./library"));
// router.use("/libraryplan", require("./library_plan"));

module.exports = router;
