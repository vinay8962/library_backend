const express = require("express");
const {
  createUser,
  getUser,
  loginUser,
  getAllUser,
} = require("../controllers/user");
const createUserMiddleware = require("../middlewares/createUserMiddleware");

const router = express.Router();

router.post("/", createUserMiddleware, createUser);

router.get("/", getAllUser);
router.get("/:id", getUser);

router.post("/login", loginUser);
module.exports = router;
