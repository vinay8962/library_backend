const { celebrate, Joi, Segments } = require("celebrate");

const createUserMiddleware = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().min(3).max(30).required().messages({
      "string.empty": "Name is required.",
      "string.min": "Name must be at least 3 characters long.",
      "string.max": "Name must be at most 30 characters long.",
    }),
    email: Joi.string().email().required().messages({
      "string.empty": "Email is required.",
      "string.email": "Please provide a valid email address.",
    }),
    password: Joi.string().min(6).required().messages({
      "string.empty": "Password is required.",
      "string.min": "Password must be at least 6 characters long.",
    }),
    mobile: Joi.string()
      .pattern(/^\d{10}$/)
      .optional()
      .messages({
        "string.pattern.base": "Mobile number must be exactly 10 digits.",
      }),
    address: Joi.string().max(255).optional().allow(""),
    roleId: Joi.number().integer().required().messages({
      "number.base": "Role ID must be a valid integer.",
      "any.required": "Role ID is required.",
    }),
    libraryId: Joi.when("roleId", {
      is: 103, // Assuming roleId 103 is for students
      then: Joi.number().integer().required().messages({
        "any.required": "Library ID is required for students.",
      }),
      otherwise: Joi.number().integer().optional().allow(null),
    }),
    libraryPlanId: Joi.when("roleId", {
      is: 103,
      then: Joi.number().integer().required().messages({
        "any.required": "Library Plan ID is required for students.",
      }),
      otherwise: Joi.number().integer().optional().allow(null),
    }),
  }),
});

module.exports = createUserMiddleware;
