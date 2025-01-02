const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/db");
const bodyParser = require("body-parser");
const apiRouter = require("./routers/index");
const cors = require("cors");
dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 8000;
const server = express();

// Middleware for JSON parsing
server.use(express.json());
server.use(bodyParser.json());

// Use the router
server.use(cors());
server.use("/", apiRouter);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    server.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
