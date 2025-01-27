// Import models
const bookingLibrary = require("./booking_library");
const library = require("./library");
const libraryPlan = require("./library_plan");
const libraryUser = require("./library_users");
const plans = require("./plans");
const Role = require("./role");
const User = require("./user");

// Import associations setup
const setupAssociations = require("./associations");
const sequelize = require("../../config/db");

// Initialize associations
setupAssociations();

// Export models and sequelize instance
module.exports = {
  sequelize,
  bookingLibrary,
  library,
  libraryPlan,
  libraryUser,
  plans,
  Role,
  User,
};
