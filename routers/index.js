const express = require("express");

const router = express.Router();

router.use("/users", require("./user"));
router.use("/role", require("./role"));
router.use("/library", require("./library"));
router.use("/bookinglibrary", require("./booking_library"));
router.use("/plans", require("./plans"));
router.use("/libraryuser", require("./library_user"));

module.exports = router;
