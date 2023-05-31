const mongooes = require("mongoose");

module.exports = async () => {
  try {
    await mongooes.connect("mongodb://127.0.0.1:27017/TP9", {
      autoIndex: true,
      serverSelectionTimeoutMS: 3000, //default 30s
    });
    console.log("MongoDB connect");
  } catch (err) {
    console.log("mongoose", err);
  }
};
