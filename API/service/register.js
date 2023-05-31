const Users = require("./model/users");

const register = async (params) => {
  try {
    const { email, username, firstname, lastname, password } = params;
    const existed = Users.f
  } catch (err) {
    return {
      status: false,
      message: err || "err",
    };
  }
};
