const users = require("../model/users");
const bcrypt = require("bcrypt");
const { encryptData, decryptData } = require("../Middleware/passwordEncrytion");

const register = async (params) => {
  try {
    const { email, username, firstname, lastname, password } = params;
    const existed = await users.findOne({ email });
    if (existed) {
      throw "Email is already existed";
    }
    const hash = encryptData(password);
    const newUser = {
      email,
      username,
      firstname,
      lastname,
      password: hash,
    };
    const createdUser = await users.create(newUser);
    return {
      success: true,
      data: createdUser,
    };
  } catch (err) {
    return {
      success: false,
      error: err || "error",
    };
  }
};

module.exports = { register };
