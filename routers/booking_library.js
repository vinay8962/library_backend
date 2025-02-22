const express = require("express");
const {
  getBooking,
  createBooking,
  getBookingById,
} = require("../controllers/booking_library");

const router = express.Router(); // Fixed usage of Router

router.get("/", getBooking);
router.get("/:id", getBookingById);
router.post("/", createBooking);

module.exports = router;
