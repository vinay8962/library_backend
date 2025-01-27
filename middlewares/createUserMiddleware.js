// const { celebrate, Joi, Segments } = require("celebrate");

// const createUserMiddleware = celebrate({
//   [Segments.BODY]: Joi.object().keys({
//     name: Joi.string().min(3).max(30).required(),
//     email: Joi.string().email().required(),
//     password: Joi.string().min(6).required(),
//     age: Joi.number().integer().min(18).optional(),
//     roleId: Joi.number().integer().required(),
//     libraryId: Joi.when("roleId", {
//       is: Joi.number().valid(1), // assuming 1 represents student
//       then: Joi.number().integer().required(),
//       otherwise: Joi.number().integer().optional().allow(null),
//     }),
//   }),
// });

// module.exports = createUserMiddleware;
