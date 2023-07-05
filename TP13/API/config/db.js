//Import the mongo file.
const mongoose = require("mongoose");

//function connect
module.exports = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ip_tp11", {
      autoIndex: true, //use ful for search enjine
      serverSelectionTimeoutMS: 3000, //default 30s
    });
    console.log("MongoDB connect");
  } catch (err) {
    console.log("mongoose", err);
  }
};
