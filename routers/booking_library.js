const express = require("express");
const { getBooking, createBooking } = require("../controllers/booking_library");

const router = express.Router(); // Fixed usage of Router

router.get("/", getBooking);
router.post("/", createBooking);

module.exports = router;
