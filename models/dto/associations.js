const bookingLibrary = require("./booking_library");
const library = require("./library");
const libraryPlan = require("./library_plan");
const libraryUser = require("./library_users");
const plans = require("./plans");
const Role = require("./role");
const User = require("./user");

const setupAssociations = () => {
  // Define associations for bookingLibrary
  bookingLibrary.belongsTo(library, {
    foreignKey: "library_id",
    as: "library",
  });

  // Define associations for libraryPlan
  libraryPlan.belongsTo(plans, {
    foreignKey: "plan_id",
    as: "planDetails",
  });

  // Define associations for User and Role
  User.belongsTo(Role, {
    foreignKey: "roleId",
    as: "role",
  });

  // Define associations for libraryUser
  libraryUser.belongsTo(User, {
    foreignKey: "user_id",
    as: "associatedUser", // Changed alias to avoid conflict
  });

  library.hasMany(libraryPlan, {
    foreignKey: "library_id",
    as: "libraryPlan",
  });

  User.hasMany(libraryUser, {
    foreignKey: "user_id",
    as: "libraryUsers",
  });
  libraryUser.belongsTo(library, {
    foreignKey: "library_id",
    as: "library", // Define an alias for the association
  });

  library.hasMany(libraryUser, {
    foreignKey: "library_id",
    as: "libraryUsers", // Define an alias for the reverse association
  });
  libraryUser.belongsTo(libraryPlan, {
    foreignKey: "library_plan_id", // Ensure this matches your foreign key in LibraryUser
    as: "libraryPlan", // Alias for the association
  });

  libraryPlan.hasMany(libraryUser, {
    foreignKey: "library_plan_id", // Ensure this matches your foreign key in LibraryUser
    as: "libraryUsers", // Alias for the reverse association
  });
};

module.exports = setupAssociations;
