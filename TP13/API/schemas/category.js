const Joi = require("joi");

module.exports = Joi.object({
  name: Joi.string().required(),
  desc: Joi.string(),
});
