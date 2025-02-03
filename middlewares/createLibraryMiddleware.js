const { celebrate, Joi, Segments } = require("celebrate");

const addLibraryMiddleware = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().min(3).max(50).required().messages({
      "string.empty": "Library name is required.",
      "string.min": "Library name must be at least 3 characters long.",
      "string.max": "Library name cannot exceed 50 characters.",
    }),
    location: Joi.string().min(5).max(100).required().messages({
      "string.empty": "Library location is required.",
      "string.min": "Location must be at least 5 characters long.",
      "string.max": "Location cannot exceed 100 characters.",
    }),
    start_time: Joi.date().required().messages({
      "date.base": "Start time must be a valid date.",
      "any.required": "Start time is required.",
    }),
    close_time: Joi.date().greater(Joi.ref("start_time")).required().messages({
      "date.base": "Close time must be a valid date.",
      "date.greater": "Close time must be after the start time.",
      "any.required": "Close time is required.",
    }),
    seats: Joi.number().integer().min(1).required().messages({
      "number.base": "Seats must be a valid integer.",
      "number.min": "There must be at least 1 seat.",
      "any.required": "Seats are required.",
    }),
    owner_id: Joi.number().integer().required().messages({
      "number.base": "Owner ID must be a valid integer.",
      "any.required": "Owner ID is required.",
    }),
    libraryplan: Joi.array()
      .items(
        Joi.object().keys({
          plan_name: Joi.string().min(3).required().messages({
            "string.empty": "Plan name is required.",
            "string.min": "Plan name must be at least 3 characters long.",
          }),
          plan_id: Joi.number().integer().required().messages({
            "number.base": "Plan ID must be a valid integer.",
            "any.required": "Plan ID is required.",
          }),
          plan_amount: Joi.number().precision(2).required().messages({
            "number.base": "Plan amount must be a valid number.",
            "any.required": "Plan amount is required.",
          }),
        })
      )
      .optional()
      .messages({
        "array.base": "Library plan must be an array of objects.",
      }),
  }),
});

module.exports = addLibraryMiddleware;
