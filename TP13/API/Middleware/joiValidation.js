const registerSchema = require("../schemas/register");

const joiValidationMiddleware = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      err: err.details?.[0]?.message || "Unknown Error",
    });
  }
};

module.exports = joiValidationMiddleware;
