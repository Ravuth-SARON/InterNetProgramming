const Joi = require("joi");

const registerSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  firstname: Joi.string().alphanum().min(2).max(50).required(),
  lastname: Joi.string().alphanum().min(2).max(50).required(),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

  repeat_password: Joi.ref("password"),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
}).with("password", "repeat_password");

module.exports = registerSchema;
