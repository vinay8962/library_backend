const express = require("express");
const { createUser, getUser, loginUser } = require("../controllers/user");

const router = express.Router();

router.post("/", createUser);

router.get("/", getUser);

router.post("/login", loginUser);
module.exports = router;
