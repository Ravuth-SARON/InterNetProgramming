const users = require("../model/users");

const findByOne = async (email) => {
  try {
    const user = await users.findOne({ email });
    return user;
  } catch (err) {
    throw "user invalid";
  }
};
module.exports = {
  findByOne,
};
