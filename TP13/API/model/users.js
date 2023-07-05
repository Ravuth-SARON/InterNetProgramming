const { Timestamp } = require("mongodb");
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

var userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    firstname: {
      type: String,

      required: true,
    },
    lastname: {
      type: String,

      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
userSchema.methods.matchesPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.statics.doesntExist = async function (options) {
  return (await this.where(options).countDocuments()) === 0;
};

var Users = mongoose.model("Users", userSchema);
module.exports = Users;
